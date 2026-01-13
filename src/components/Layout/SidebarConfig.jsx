import {PATH_DASHBOARD} from "../../routes/paths.jsx";
import HomeIcon from "../../assets/icons/home.svg"
import DoctorIcon from "../../assets/icons/doctors.svg"
import ScheduleIcon from "../../assets/icons/calendar.svg"
import SettingIcon from "../../assets/icons/setting.svg"



const sidebarConfig = [
    {
        subheader: 'Menu',
        items: [
            { title: 'Overview', path: PATH_DASHBOARD.general.app, icon: HomeIcon},
            { title: 'Doctors', path: PATH_DASHBOARD.general.doctors, icon: DoctorIcon},
            { title: 'Schedule', path: PATH_DASHBOARD.general.schedule, icon: ScheduleIcon},
            { title: 'Setting', path: PATH_DASHBOARD.general.setting, icon: SettingIcon},
        ]
    }
];

export {sidebarConfig}
