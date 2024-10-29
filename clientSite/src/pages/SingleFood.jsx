

const SingleFood = ({food}) => {
    const {food_name,food_price,category,photoURL,food_origin,description}=food
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
        <button className="btn bg-[#d90d36] text-white rounded-lg hover:bg-[#bf0429] px-10">Add To Cart</button>
        <button className="btn w-full text-lg">Quick View</button>
      </div>
    </div>
  </div>
  )
}

export default SingleFood