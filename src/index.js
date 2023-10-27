import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Assignment from './pages/AssignmentPage';
import InformationDeliveryPage from './pages/InformationDeliveryPage';
import MasterPage from './pages/MasterPage';
import Error404 from './pages/Error404';

const router = createBrowserRouter([
    {
        path:"Travis/",
        element:<HomePage></HomePage>,
        errorElement:<Error404></Error404>
    },
    {
        path:"Travis/auth/login",
        element:<LoginPage></LoginPage>
    },
    {
        path:"Travis/assignment",
        element:<Assignment></Assignment>
    },
    {
        path:"Travis/information-delivery/:id",
        element:<InformationDeliveryPage></InformationDeliveryPage>
    },
    {
        path:"Travis/master",
        element:<MasterPage></MasterPage>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
