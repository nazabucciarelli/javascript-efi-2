import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import NotFound from './pages/not_found/NotFound';
import Contact from './pages/contact/Contact';
import { LoginContextProvider } from './contexts/LoginContext';
import { DarkModeContextProvider } from './contexts/DarkThemeContext';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
        path: "/home",
        element: <Home></Home>,
    },
    {
        path: "/contact",
        element: <Contact></Contact>,
    },
    {
        path:"*",
        element: <NotFound></NotFound>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginContextProvider>
        <DarkModeContextProvider>
            <RouterProvider router={router} />
        </DarkModeContextProvider>
    </LoginContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
