import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const navLinks=<div className=''>
  <Link to={'/'}><button>Home</button></Link>
  <Link to={'all-jobs'}><li>All Foods</li></Link>
  <Link to={'/gallery'}><li>Gallery</li></Link>
  
  </div>
  return (
    <div className="navbar bg-base-100 shadow-md">
  
  <div className='flex justify-between mx-auto w-full'>
  <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-56 absolute shadow">
         {navLinks}
        </ul>
      </div>
      <Link className="btn btn-ghost text-xl sm:text-2xl font-bold">ZastyZone</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 space-x-4 font-normal text-xl">
      <Link to={'/'}><li>Home</li></Link>
      <Link to={'all-jobs'}><li>All Foods</li></Link>
      <Link to={'gallery'}><li>Gallery</li></Link>
      </ul>
    </div>
    <div className="navbar-end flex text-xl justify-end mx-8 font-medium items-center">
     <Link to={'/login'}><button className='btn btn-ghost text-xl items-center'>Login</button></Link>
    </div>
  </div>
   </div>

  )
}

export default Navbar