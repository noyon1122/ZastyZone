

import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import toast from 'react-hot-toast'


export default function Register () {
const {createUser,user,setUser,signInWithGoogle,logOut,updateUserProfile}=useContext(AuthContext)
const navigate=useNavigate()

//handle signUp with email and password

  const handleSignUp=async e =>{
    e.preventDefault()
    const form=e.target
    const name=form.name.value
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value
   //console.log(name,email,password,photoURL)

   try{
    const result=await createUser(email,password)
    toast.success("User Created Successfully!")
    await updateUserProfile(name,photo)
    setUser({...result?.user,displayName:name,photoURL:photo})
    navigate('/')

   }catch(err){
     console.log(err?.message)
   }
 
  }

  //SignIn with Google 

  const handleGoogleSignIn=async()=>{
    try{
      const result=await signInWithGoogle()
      toast.success("Sign In Successfully!")
      navigate('/')

    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto justify-center min-h-screen bg-gray-100 p-4 gap-3">
      {/* Left Side - Image */}
      <div className="w-full md:w-5/12 m-4 rounded-md  bg-white">
     
        <img
          src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1730128770~exp=1730132370~hmac=1b7b9a5ffea20ebc191373f63e216aace92ca75e483e930ce9ac34d3bf9cee2d&w=740"
          alt="Signup"
          className=" rounded-lg shadow-lg border-4 border-white h-full"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-2/5 px-7  bg-white rounded-lg shadow-lg mt-4 md:mt-0">
        <h2 className="text-2xl font-bold text-center mb-1 mt-2 text-gray-800">Sign Up</h2>

        <form onSubmit={handleSignUp} className="space-y-3 mb-3 py-1">
          <div>
            <label className="block text-sm font-semibold text-gray-600">Name</label>
            <input
              type="text"
              name='name'
              placeholder="Your Name"
              className="w-full px-4 py-1 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              name='email'
              placeholder="Your Email"
              className="w-full px-4 py-1 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Your Password"
              className="w-full px-4 py-1 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600">Photo URL</label>
            <input
              type="text"
              name='photo'
              placeholder="Photo URL"
              className="w-full px-4 py-1 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

        <div>
        <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            Sign Up
          </button>
        </div>
        </form>
        <button
            type="submit" onClick={handleGoogleSignIn}
             className="w-full px-4 py-2 my-2 font-semibold text-white bg-cyan-500 rounded-md hover:bg-cyan-600"
          >
            SIGN IN WITH GOOGLE
          </button>
          <button
            type="submit"
             className="w-full px-4 py-2 my-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            SIGN IN WITH GITHUB
          </button>
          <p className="mb-3">Already have an Account? Please<Link  to={'/login'} className="text-blue-600 font-medium"> Login</Link></p>
      </div>
    </div>
  );
}