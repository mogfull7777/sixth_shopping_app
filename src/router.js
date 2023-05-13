import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./component/Main";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import FindEmail from "./pages/FindEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main />
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/signup',
        element : <SingUp />
    },
    {
        path : '/find/email',
        element : <FindEmail />
    },
    {
        path : '/forgot/password',
        element : <ForgotPassword />
    },
    {
        path : '/profile',
        element : <Profile />
    },
    {
        path : '/:productId',
        element : <ProductDetail />
    }
])

export default Router;