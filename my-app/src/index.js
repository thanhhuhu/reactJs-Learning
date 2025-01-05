import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes, Route, RouterProvider,
} from "react-router-dom";
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
        <Routes>
            {/*đường dẫn đến các trang khác */}
            {/*Để bên trong Route để thể hiện 3 đường link này có liên quan đến nhau */}
            <Route path ="/" element={<App/>} >
                <Route index element= {<HomePage />} />
                <Route path ="users" element={<User />} />
                <Route path ="admins" element={<Admin />} />
            </Route>
        </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
