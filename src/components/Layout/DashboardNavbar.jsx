import React from 'react';
import '../../styles/dashboard.css'
import {useAuth} from "../../hooks/index.jsx";
import {IMAGE_URL} from "../../config.jsx";
import NotificationIcon from "../../assets/icons/notification.svg"
import ConnectIcon from "../../assets/icons/connect.svg"
import SearchIcon from "../../assets/icons/search.svg"

export default function DashboardNavbar() {
    const {user} = useAuth()
    return (
        <div className={'dashboard-navbar'}>
            <div className={'navbar-search'}>
                <input type='text' placeholder='Search...'/>
                <img src={SearchIcon} alt={'search'} className={'icon-search'}/>
            </div>
            <div className={'navbar-avatar-wrap'}>
                <div className={'navbar-notification-wrap'}>
                    <div className={'navbar-notification'}>
                        <img src={NotificationIcon} alt={'notification'}/>
                        <div className={'navbar-notification-count'}>
                            <span>10</span>
                        </div>
                    </div>
                    <div className={'navbar-notification'}>
                        <img src={ConnectIcon} alt={'Connect'}/>
                        <div className={'navbar-notification-count'}>
                            <span>1</span>
                        </div>
                    </div>
                </div>

                <p>{user?.b_name}</p>
                <div className="navbar-avatar">
                    <img src={`${IMAGE_URL}/staff/${user.image}`} alt={'avatar'}/>
                </div>
            </div>
        </div>
    );
}
