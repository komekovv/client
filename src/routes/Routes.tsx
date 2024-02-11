
import About from "@/pages/about/About";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import IndexPage from "@/IndexPage";
import Contact from "@/pages/contact/Contact";
import Courses from "@/pages/courses/Courses";
import Scholarship from "@/pages/scholarship/Scholarship";
import Article from "@/pages/article/Article";
import Login from "@/pages/login/Login";
import RegisterPage from "@/pages/register/Register";
import User from "@/pages/user/User";

import UserLayout from "@/UserLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import Logout from "@/components/Logout/Logout";
import Carbon from "@/pages/article/Carbon";
import Droughts from "@/pages/article/Droughts";
import Volcano from "@/pages/article/Volcano";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <IndexPage />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/scholarship',
                element: <Scholarship />
            },
            {
                path: '/article',
                element: <Article />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/user',
                element: <User />
            },
            {
                path: '/carbon',
                element: <Carbon />
            },
            {
                path: '/droughts',
                element: <Droughts />
            },
            {
                path: '/volcano',
                element: <Volcano />
            },

          ]
    },
    // Authenticated Layout
    {
        path: '/user',
        element: <UserLayout />,
        children:[
            {
                path: '',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/logout',
        element: <Logout />
    }
])