import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider"
import toast from "react-hot-toast"
import axios from "axios"

const SingleFood = ({food}) => {
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
    const {_id,food_name,food_price,category,photoURL,food_origin,description}=food
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
  return (
    <div className="card card-compact bg-base-100 shadow-xl ml-6 mt-3">
    
     <div className="">
    <figure className="">
    <img 
        src={photoURL}
        className="w-72 h-60 mt-2 rounded-lg"
        alt="Shoes" />
    </figure>
     </div>
    
    <div className="flex flex-col justify-center items-center ">
      <h2 className="card-title pt-2">{food_name}</h2>
      <div className="flex gap-8 font-bold pb-2 text-xl">
        <p className=" text-red-600">${food_price}</p>
      <p>{food_origin}</p></div>
      <div className="card-actions mb-4 flex justify-center w-full">
        <button onClick={handleAddtoCart} className="btn bg-[#d90d36] text-white rounded-lg hover:bg-[#fa0269] px-10">Add To Cart</button>
       <Link to={`/foodDetails/${_id}`} > <button className="btn w-full text-lg">Quick View</button></Link>
      </div>
    </div>
  </div>
  )
}

export default SingleFood