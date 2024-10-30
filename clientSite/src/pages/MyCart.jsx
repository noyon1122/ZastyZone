import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";


const MyCart = () => {
    const {user}=useContext(AuthContext)
    const [carts,setCart]=useState([]);

   useEffect(()=>{
     const getCartData =async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/cart/${user?.email}`)
         setCart(data)
     }
     getCartData()
   },[])
  // console.log(carts)
  return (
    <div>
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left  text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Food Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Food Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {
            carts.map(cart =>  <tr key={cart._id} className="bg-white border-b hover:bg-gray-50">
                <td className="p-4">
                    <img src={cart.photoURL} className="w-16 md:w-32 max-w-full max-h-full" alt="Food"/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                    {cart.category}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                    {cart.food_name}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 " placeholder="1" required />
                        </div>
                        <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                    ${cart.food_price}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-red-600  hover:underline">Remove</a>
                </td>
            </tr>)
           }
         
        </tbody>
    </table>
</div>

    </div>
  )
}

export default MyCart