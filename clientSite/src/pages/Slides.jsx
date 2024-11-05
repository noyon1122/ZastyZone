import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Aos from "aos";
import Slide from './Slide';
import 'swiper/css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Beef from '../Images/Slides_Photo/Beef Curry.png'
import chicken from '../Images/Slides_Photo/chicken Curry.png'
import tomato from '../Images/Slides_Photo/Grilled Tomato.png'
import pasta from '../Images/Slides_Photo/Pasta.png'
import noddles from '../Images/Slides_Photo/noodles.png'
import salad from '../Images/Slides_Photo/Egg Salad.png'


const Slides = () => {
  return (
   <div className="bg-gray-50 ">
     <div data-aos="fade-up" className="py-5 container mx-auto">
          <div className="flex flex-col justify-center items-center border-5 border-red-500 mb-10">
            <h1 className="text-sm md:text-2xl text-red-600 mb-2">crispy, every bite taste
            </h1>
            <h1 className="text-2xl md:text-5xl font-bold">Hot Delicious Items</h1>
          </div>
         <Swiper watchSlidesProgress={true} 
         slidesPerView={3}
         spaceBetween={20}
         centeredSlides={true}
         loop={true}
         autoplay={{
           
           disableOnInteraction: false,
         }}
         modules={[Autoplay]}
         className="mySwiper" >
        
        <SwiperSlide ><Slide uri={Beef} text="Beef Curry" ></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={pasta} text="Pasta Paradise"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={tomato} text="Sauces Grilled Tomato"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={chicken} text="Chicken Curry"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={noddles} text="Noddles"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={salad} text="Egg Salad"></Slide></SwiperSlide>
      
      </Swiper>
    </div>
   </div>
  )
}

export default Slides