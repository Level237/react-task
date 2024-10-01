import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import RootLayout from "../pages/Layouts/RootLayout";

export const routes=createBrowserRouter([{
    path:'/',
    element:<RootLayout/>,
    children:[
        {
            path:'',
            element:<DashboardPage/>
        }
    ]
},

])