import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";


const MyAddedFood = () => {
  const {user}=useContext(AuthContext)
  const [foods,setFood]=useState([]);

 useEffect(()=>{
   const getAddedData =async()=>{
      const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/addedfood/${user?.email}`)
      setFood(data)
   }
   getAddedData()
 },[])
 console.log(foods)
  return (
    <div>
        

    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
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
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
               {
                foods.map(food =>  <tr key={food._id} className="bg-white border-b hover:bg-gray-50">
                    <td className="p-4">
                        <img src={food.photoURL} className="w-16 md:w-32 max-w-full max-h-full" alt="Food"/>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                        {food.category}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                        {food.food_name}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                        ${food.food_price}
                    </td>
                </tr>
                )
               }
             
            </tbody>
        </table>
    </div>
    
        </div>
  )
}

export default MyAddedFood