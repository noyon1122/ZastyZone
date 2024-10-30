import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

const FoodDetails = () => {
    const {user}=useContext(AuthContext)
    const [count,setCount]=useState(1)
    const food = useLoaderData()
    const navigate=useNavigate()
    const { _id, food_name, food_price, category, photoURL, food_origin, description } = food
    const email=user?.email
    //console.log(user?.email)
    const cartDetails={food_price,category,photoURL,food_name,email}
    const handleAddtoCart =async()=>{
        try{

            const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/cart`,cartDetails)
            toast.success('Add to Cart SuccessFully!')
            navigate('/mycart')

        }catch(err)
        {
            console.log(err.message)
        }
      
    }
    //increase food quantity
    const handlePlus=()=>{
        setCount(count+1)
    }
    const handleMinus=()=>{
        setCount(count-1)
    }
    return (


        <div className="flex flex-col justify-center md:justify-start items-center  my-5 mx-5 md:mx-10 bg-white  rounded-lg  md:flex-row gap-4 md:gap-10 text-gray-700">
            <div className=' w-11/12 md:h-auto md:w-1/2 rounded-md md:justify-start items-center '>
                <img className=" rounded-md" src={photoURL} alt="" />
            </div>
            <div className='leading-6 mx-16'>
                <h1 className='text-xl font-bold'>{food_name}</h1>
                <div className='w-full md:w-2/3 font-medium'>
                    <h1>{description}</h1>
                </div>
                
               <div className='flex gap-4 items-center'>
               
               <h1 className='font-bold'>
                    {food_origin}
                </h1>
                <h1 className='text-lg font-medium'>{category}</h1>
               
               </div>
               <h1 className='font-semibold text-lg mb-2'>${food_price}</h1>
               <div className='flex mb-3'>
              
              
               <svg onClick={handleMinus} className="w-14 h-14 border-2 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/>
               </svg>
               <div className="w-14 h-14 border-t-2 border-b-2">
                <h1 className='flex justify-center  items-center w-full h-full text-2xl font-bold'>{count}</h1>
               </div>
               <svg onClick={handlePlus} className="w-14 h-14 border-2 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
               </svg>
  
               </div>
                <button onClick={handleAddtoCart} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add to Cart
                    </span>
                </button>
                
            </div>


        </div>
      

 
  
  

    )
}

export default FoodDetails