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
import FoodDetails from "../pages/FoodDetails";
import MyCart from "../pages/MyCart";
import Gallery from "../pages/Gallery";
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
                path:'/myaddedfoods',
                element:<MyAddedFood></MyAddedFood>
            },
            {
                path:'/allFoods',
                element:<AllFoods></AllFoods>
            },
            {
                path:'/foodDetails/:id',
                loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/foodDetails/${params.id}`),
                element:<FoodDetails></FoodDetails>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            }
          
        ]
    }
])
export default router