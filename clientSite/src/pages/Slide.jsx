import { Link } from "react-router-dom"


const Slide = ({uri,text}) => {

  return (
    
<div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
  <Link>
    <img className="p-6 rounded-t-lg" src={uri} alt="product image" />
  </Link>
  <div className="px-3 pb-3">
    <a href="#">
      <h5 className="text-lg md:text-xl font-medium md:font-semibold tracking-tight text-gray-900">{text}</h5>
    </a>
  
    <div className="flex flex-col sm:flex-col md:flex-row items-center md:justify-between">
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-1">$40</h1>
      </div>
      <div>
      <button className="inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 md:ml-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
      <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
       Green to blue
      </span>
      </button>
      
      </div>
    </div>
  </div>
</div>

  )
}

export default Slide