import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Main } from "../pages/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddFood from "../pages/AddFood";
import MyAddedFood from "./MyAddedFood";
import ErrorPage from "../pages/ErrorPage";
import AllFoods from "../pages/AllFoods";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                 index:true,
                 element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addfood',
                element:<AddFood></AddFood>
            },
            {
                path:'/myaddedfood',
                element:<MyAddedFood></MyAddedFood>
            },
            {
                path:'/allFoods',
                element:<AllFoods></AllFoods>
            }
          
        ]
    }
])
export default router