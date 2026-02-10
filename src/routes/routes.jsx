import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Admin/Dashboard";
import Fleet from "../pages/Admin/Fleet";
import Workforce from "../pages/Admin/Workforce";
import Records from "../pages/Admin/Records";
import Finance from "../pages/Admin/Finance";
import Users from "../pages/Admin/Users";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },

    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },

    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'fleet',
                element: <Fleet />
            },
            {
                path: 'workforce',
                element: <Workforce />
            },
            {
                path: 'records',
                element: <Records />
            },
            {
                path: 'finance',
                element: <Finance />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'settings',
                element: <div className="p-8">Settings Page (Coming Soon)</div>
            }
        ]
    }
])