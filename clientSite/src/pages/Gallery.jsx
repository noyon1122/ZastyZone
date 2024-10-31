
import burger from '../Images/burger.jpg'
import fish from '../Images/fish.jpg'
import FriedChicken from '../Images/FriedChicken.jpg'
import Pizza from '../Images/Pizza.jpg'
import rice from '../Images/rice.jpg'
import Sandwich from '../Images/Sandwich.jpg'
import SeaFood from '../Images/SeaFood.jpg'
import SpringRoll from '../Images/SpringRoll.jpg'
import img1 from '../Images/img1.jpeg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'
import img7 from '../Images/img7.jpg'
import img8 from '../Images/img8.jpg'


const Gallery = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
       <div>
        <img src={img1} alt="" />
       </div>
       <div>
        <img src={img2} alt="" />
       </div>
       <div className=''>
        <img className='col-span-2' src={img3} alt="" />
       </div>
       <div>
        <img src={img4} alt="" />
       </div>
       <div>
        <img src={img5} alt="" />
       </div>
       <div>
        <img src={img6} alt="" />
       </div>
       <div>
        <img src={img7} alt="" />
       </div>
       <div>
        <img src={img8} alt="" />
       </div>
       <div>
        <img className='h-full' src={burger} alt="" />
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
        <img src={Pizza} alt="" />
       </div>
       <div>
        <img src={fish} alt="" />
       </div>
       <div>
        <img src={FriedChicken} alt="" />
       </div>

    </div>
  )
}

export default Gallery