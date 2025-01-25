import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Đảm bảo import này nằm trên đầu
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {store, persistor} from './redux/store'; // Đảm bảo import này cũng ở đầu
import 'nprogress/nprogress.css'
// Các import khác
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';import { thunk } from 'redux-thunk';  // Sửa cú pháp import này
import ManageUser from './components/Admin/Content/ManangeUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from "./components/Auth/Login";
import Layout from './Layout';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

reportWebVitals();
