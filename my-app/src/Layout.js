import {
    BrowserRouter,
    Routes, Route,
} from "react-router-dom";
import App from "./App";
import HomePage from "./components/Home/HomePage";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManangeUser";
import Login from "./components/Auth/Login";
import React from "react";
import {Bounce, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Auth/Register";

const Layout = (props) => {
    return (
        <>
            <Routes>
                {/*đường dẫn đến các trang khác */}
                {/*Để bên trong Route để thể hiện 3 đường link này có liên quan đến nhau */}
                <Route path ="/" element={<App/>} >
                    <Route index element= {<HomePage />} />
                    <Route path ="users" element={<User />} />
                </Route>
                <Route path ="/admins" element={<Admin />} >
                    <Route index element ={<DashBoard/>} />
                    <Route path ="manage-users" element={<ManageUser />} />
                </Route>

                <Route path ="/login" element={<Login />} />
                <Route path ="/register" element={<Register />} />
            </Routes>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

        </>
    )
}
export default Layout