import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Assignment from './pages/AssignmentPage';
import InformationDeliveryPage from './pages/InformationDeliveryPage';
import MasterPage from './pages/MasterPage';
import Error404 from './pages/Error404';

// const router = createBrowserRouter([
//     {
//         path:"Travis/",
//         element:<HomePage></HomePage>,
//         errorElement:<Error404></Error404>
//     },
//     {
//         path:"Travis/auth/login",
//         element:<LoginPage></LoginPage>
//     },
//     {
//         path:"Travis/assignment",
//         element:<Assignment></Assignment>
//     },
//     {
//         path:"Travis/information-delivery/:id",
//         element:<InformationDeliveryPage></InformationDeliveryPage>
//     },
//     {
//         path:"Travis/master",
//         element:<MasterPage></MasterPage>
//     },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <RouterProvider router={router} />
    <Provider store={store}>
    <div>
        <BrowserRouter basename='/Travis'>      
          <Routes>
            <Route path='/' Component={HomePage} errorElement={<Error404></Error404>} />
            <Route path='/auth/login' Component={LoginPage} />
            <Route path='/assignment' Component={Assignment} />
            <Route path='/information-delivery/:id' Component={InformationDeliveryPage} />
            <Route path='/master' Component={MasterPage} />
          </Routes>
        </BrowserRouter>
    </div>
    </Provider>
);

reportWebVitals();
