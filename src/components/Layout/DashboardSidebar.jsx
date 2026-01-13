import React from 'react';
import '../../styles/dashboard.css'
import {Link, matchPath, useLocation} from "react-router-dom";
import {sidebarConfig} from "./SidebarConfig.jsx";
import Logo from "./../../assets/logo.svg"
import LogoutIcon from './../../assets/icons/logout.svg'

export default function DashboardSidebar() {
    const { pathname } = useLocation();
    const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
    return (
        <div className={'dashboard-sidebar'}>
            <div className={'navbar-content'}>
                <div className={'navbar-logo'}>
                    <img className={'logo'} src={Logo} alt="logo"/>
                </div>
                <div className={'navbar-list'}>
                    {sidebarConfig.map((list) => {
                        const { subheader, items } = list;
                        return (
                            <div key={subheader}>
                                {items.map((item) =>
                                        <Link to={item.path}>
                                            <div key={item.path} className={`icon-nav ${match(item.path) && 'active-nav'}`}>
                                               <img src={item.icon} alt={item.title} />
                                            </div>
                                        </Link>

                                    // <NavItem key={item.title} item={item} active={match} isShow={isShow} show={item?.show} />
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className={'navbar-footer'}>
                    <div  className={`icon-nav`}>
                        <img src={LogoutIcon} alt={'logout'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
