import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Aos from "aos";

import Slide from './Slide';
import 'swiper/css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



const uri1='https://i.ibb.co.com/0Kn9F85/style-still-life-with-noodles-bowl.jpg'
const uri2='https://i.ibb.co.com/J2m246L/side-view-pilaf-with-stewed-beef-meat-plate.jpg'
const uri3='https://i.ibb.co.com/N1ywb7P/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg'
const uri4='https://i.ibb.co.com/K06PgMp/delicious-rice-chicken-meat-patties-with-garlic-tomato-sauce.jpg'
const uri6='https://i.ibb.co.com/7r6Ywts/chicken-skewers-with-slices-sweet-peppers-dill.jpg'








// import required modules

const Slides = () => {
  return (
   <div className="bg-gray-50 ">
     <div data-aos="fade-up" className="py-5 container mx-auto">
          <div className="flex flex-col justify-center items-center border-5 border-red-500 mb-10">
            <h1 className="text-2xl text-red-600 mb-2">crispy, every bite taste
            </h1>
            <h1 className="text-5xl font-bold">Hot Delicious Items</h1>
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
        
       
       <SwiperSlide ><Slide uri={uri1} text="Chow Mein" ></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={uri2} text="Meat Khichuri"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={uri3} text="Pasta Paradise"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={uri4} text="Chicken Chop"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={uri6} text="Skewers"></Slide></SwiperSlide>
      
     
      </Swiper>
    </div>
   </div>
  )
}

export default Slides