import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AddFood = () => {
     const {user}=useContext(AuthContext)
     const navigate=useNavigate()
    
     
    const handleAddFood=async e =>{
        e.preventDefault()
        const form=e.target;
        const food_name=form.fname.value;
        const food_price=form.price.value;
        const category=form.category.value;
        const photoURL=form.photo.value;
        const food_origin=form.forigin.value;
        const description=form.description.value;
        const user_name=user?.displayName;
        const email=user?.email
        
        const foodinfo={food_name,user_name,food_price,category,photoURL,food_origin,description,email}
        console.log(foodinfo)
        try{
            const {result}=await axios.post(`${import.meta.env.VITE_API_URL}/foods`,foodinfo)
           // console.log(result)
            toast.success('Food Added Successfully!')
            navigate('/myaddedfoods')

        }catch(err)
        {
            console.log(err.message)
            toast.error("Something went wrong")
        }
    }
  return (
   
        <section className="bg-white ">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 ">Add a new food</h2>
      <form onSubmit={handleAddFood}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="w-full">
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Food Name</label>
                  <input type="text" name="fname" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Food Name" required=""/>
              </div>
              <div className="w-full">
                  <label htmlFor="madeby" className="block mb-2 text-sm font-medium text-gray-900">Made By</label>
                  <input type="text" name="madeby" disabled defaultValue={user?.displayName} id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "/>
              </div>
              <div className="w-full">
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Food Orgin</label>
                  <input type="text" name="forigin" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Food Origin" required=""/>
              </div>
              <div className="w-full">
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                  <input type="text" name="price" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Food Name" required=""/>
              </div>
              <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                  <input type="text" name="category" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Category" required=""/>
                 
              </div>
              <div>
                  <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Image</label>
                  <input type="text" name="photo" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Photo URL" required=""/>
              </div> 
              <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" name="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800">
              Add product
          </button>
      </form>
  </div>
</section>
    
  )
}

export default AddFood