import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Header from './components/Header/Header.js';
import {Outlet} from 'react-router-dom';

const App = () =>{
    return (
        // nested routes
        <div className="app-container">
            <div className="header-container">
                <Header/>
            </div>
            <div className="main-container">
                <div className="sidenav-container">

                </div>
                <div className="app-content">
                    {/*Sử dụng outlet sẽ giữ nguyên thanh nav bar và sẽ hiện content ở phần main dưới*/}
                    <Outlet />
                </div>
            </div>
            {/*<div>*/}
            {/*       <div>*/}
            {/*           <button>*/}
            {/*               /!*điều hướng người dùng tới trang*!/*/}
            {/*               <Link to="/users">go to User page</Link>*/}
            {/*               </button>*/}
            {/*           <button>*/}
            {/*               <Link to="/admins">go to Admin page</Link>*/}
            {/*              </button>*/}
            {/*       </div>*/}
            {/*   </div>*/}
        </div>
    )
}
export default App;
