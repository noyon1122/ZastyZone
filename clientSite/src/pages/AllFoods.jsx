import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import axios from "axios"
import SingleFood from "./SingleFood"



const AllFoods = () => {
    const [foods,setFoods]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
       
        const getFood=async ()=>{
            const {data}=await axios(`${import.meta.env.VITE_API_URL}/allfoods`)
            setFoods(data)
           // console.log(data)
    
        }
        getFood()
    },[])
  return (
    <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-8">
            {
                foods.map(food => <SingleFood key={food._id} food={food}></SingleFood>)
            }
        </div>

        {/* Pagination Section */}
       
    </div>
  )
}

export default AllFoods