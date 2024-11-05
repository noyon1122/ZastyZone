
import burger from '../Images/burger.png'
import fish from '../Images/fish.png'
import FriedChicken from '../Images/FriedChicken.png'
import Pizza from '../Images/Pizza.png'
import rice from '../Images/rice.png'
import Sandwich from '../Images/Sandwich.png'
import SeaFood from '../Images/SeaFood.png'
import SpringRoll from '../Images/SpringRoll.png'
//import img1 from '../Images/img1.jpeg'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'
//import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.png'
//import img6 from '../Images/img6.jpg'
//import img7 from '../Images/img7.jpg'
import img9 from '../Images/img9.png'


const Gallery = () => {
  return (
    <div className=''>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-14'>
      <div>
        <img src={img2} alt="" />
       </div>
       <div className=''>
        <img className='h-56 w-full' src={img3} alt="" />
       </div>
      
       <div>
        <img src={img5} alt="" />
       </div>
      
      
       <div>
        <img src={img9} alt="" />
       </div>
       <div>
        <img className='' src={burger} alt="" />
       </div>
       <div>
        <img src={SeaFood} alt="" />
       </div><div>
        <img src={Sandwich} alt="" />
       </div>
       <div>
        <img src={SpringRoll} alt="" />
       </div>

       <div>
        <img src={rice} alt="" />
       </div><div>
        <img className='h-56 w-full' src={Pizza} alt="" />
       </div>
       <div>
        <img src={fish} alt="" />
       </div>
       <div>
        <img src={FriedChicken} alt="" />
       </div>
      </div>

    </div>
  )
}

export default Gallery