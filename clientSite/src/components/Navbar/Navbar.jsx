import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import './Navbar.css'
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const navLinks=<div className=''>
  <Link className='hover:bg-slate-100 px-2 py-1 hover:rounded-md  font-medium' to={'/'}><li>Home</li></Link>
  <Link className='hover:bg-slate-100 px-2 py-1 hover:rounded-md font-medium' to={'/allFoods'}><li>All Foods</li></Link>
  <Link className='hover:bg-slate-100 px-2 py-1 hover:rounded-md font-medium' to={'/gallery'}><li>Gallery</li></Link>
  
  </div>

 // console.log(user)
  return (
    <div className="navbar bg-zinc-900 shadow-lg font-Poppins fixed z-20 ">
  
  <div className='flex justify-between mx-auto w-full'>
  <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul 
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navLinks}
        </ul>
      </div>
      <Link className="btn btn-ghost text-white  text-xl sm:text-3xl font-bold  hover:text-orange-500">ZastyZone</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 space-x-6 text-white  text-xl">
      <Link className='hover:text-orange-500' to={'/'}><li>Home</li></Link>
      <Link className='hover:text-orange-500' to={'allFoods'}><li>All Foods</li></Link>
      <Link className='hover:text-orange-500' to={'gallery'}><li>Gallery</li></Link>
      </ul>
    </div>
    <div className="navbar-end flex text-xl justify-end mx-8 font-medium items-center">
      {
      !user &&
        <Link to={'/login'}><button className='btn btn-ghost font-bold text-lg text-white hover:text-orange-500 '>Login</button></Link>
      
    }
     {
            user && (
                <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div title={user?.displayName} className='w-10 rounded-full'>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src={
                        user?.photoURL
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <Link to={'/addfood'} className=''>Add Food</Link>
                  </li>
                  <li>
                    <Link to={'/myaddedfoods'}>My Added Foods</Link>
                  </li>
                  <li>
                    <Link to={'/mycart'}>My Cart</Link>
                  </li>
                  <li className='mt-2'>
                    <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                  </li>
                </ul>
              </div>
            )
         }
  
    </div>
   
   
  </div>
   </div>

  )
}

export default Navbar