import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import {Outlet} from "react-router-dom";
// import { FcPlus } from "react-icons/fc";


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
            </div>
            {/*sử dụng toast để tạo thông báo khi email invalid */}

        </div>
    )
}
export default Admin;