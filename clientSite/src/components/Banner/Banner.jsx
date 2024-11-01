import { Link } from 'react-router-dom'
import banner from '../../assets/Banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
  <div className='bg-gray-50'>
      <div className='bg-cover h-1/2 w-full  sm:bg-cover sm:h-screen ' style={{backgroundImage: `url(${banner})`}}>
       <div className='  container mx-auto'>
       <div data-aos="fade-up" className=' text-white text-left leading-6  h-screen place-content-center mx-10 sm:mx-32'>
           <p className="font-bold">10% Discount For 2 Order</p>
           <h1 className='text-4xl md:text-6xl mb-2 font-medium'>Enjoy The Delicious <br />
           Food Experience</h1>
          
           <h1   className=''>Indulge in the delightful culinary journey of our menu offerings, <br /> promising an unforgettable experience for your taste buds.</h1>
           <div className='mt-10'>
           <Link to={'/allFoods'}><button className="btn btn-outline btn-accent">Order Now</button></Link>
        </div>
        </div>
       
       </div>
       
    </div>
  </div>
  )
}

export default Banner