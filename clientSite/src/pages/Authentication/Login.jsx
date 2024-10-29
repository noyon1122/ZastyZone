import React, { useContext } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

export default function Login () {
  const {signIn}=useContext(AuthContext)
  const navigate=useNavigate()

  //sign In with email and Password
  const handleSignIn=async e=>{
    e.preventDefault()
   
    const form=e.target
    const email=form.email.value;
    const password=form.password.value;
    try{
      const result=await signIn(email,password)
      toast.success("Sign In SuccessFully!")
      navigate('/')
    }catch(err){
      console.log(err)
      toast.error(err?.message)
    }

  }
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto justify-center min-h-screen bg-gray-100 p-4 md:gap-3">
      {/* Left Side - Image */}
      <div className="w-full md:w-5/12 p-5 md:p-6">
        <img
          src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1730128770~exp=1730132370~hmac=1b7b9a5ffea20ebc191373f63e216aace92ca75e483e930ce9ac34d3bf9cee2d&w=740"
          alt="Signup"
          className=" rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-11/12 md:w-5/12 px-8 py-12 space-y-4 bg-white rounded-lg shadow-lg mt-4 md:mt-0">
        <h2 className="text-2xl font-bold text-center  text-gray-800">Login</h2>

        <form onSubmit={handleSignIn} className="space-y-3 mb-3">
         

          <div>
            <label className="block text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              name='email'
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Your Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        

          <button
            type="submit"
            className="w-full px-4 py-2 my-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            Login
          </button>
        </form>
        <button
            type="submit"
             className="w-full px-4 py-2 my-2 font-semibold text-white bg-cyan-500 rounded-md hover:bg-cyan-600"
          >
            SIGN IN WITH GOOGLE
          </button>
          <button
            type="submit"
             className="w-full px-4 py-2 my-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            SIGN IN WITH GOOGLE
          </button>
          <p>Don't have an Account? <Link  to={'/register'} className="text-blue-600 font-medium">Sign Up</Link></p>
      </div>
    </div>
  );
}