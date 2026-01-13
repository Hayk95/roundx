import React from 'react';
import '../../styles/dashboard.css'
import DashboardNavbar from "./DashboardNavbar.jsx";
import DashboardSidebar from "./DashboardSidebar.jsx";
import {Outlet} from "react-router-dom";
export default function DashboardLayout() {

    return (
        <div className={'dashboard-content'}>
            <DashboardNavbar/>
            <DashboardSidebar/>
            <div className={'dashboard-layout'}>
                <Outlet />
            </div>
        </div>
    );
}
