import { Swiper, SwiperSlide } from "swiper/react";

import Slide from './Slide';
import 'swiper/css';


const uri1='https://i.ibb.co.com/0Kn9F85/style-still-life-with-noodles-bowl.jpg'
const uri2='https://i.ibb.co.com/J2m246L/side-view-pilaf-with-stewed-beef-meat-plate.jpg'
const uri3='https://i.ibb.co.com/N1ywb7P/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg'
const uri4='https://i.ibb.co.com/K06PgMp/delicious-rice-chicken-meat-patties-with-garlic-tomato-sauce.jpg'
const uri6='https://i.ibb.co.com/7r6Ywts/chicken-skewers-with-slices-sweet-peppers-dill.jpg'







// import required modules

const Slides = () => {
  return (
    <div className="my-10">
         <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper" >
        
       
       <SwiperSlide ><Slide uri={uri1} text="Chow Mein" ></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={uri2} text="Meat Khichuri"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={uri3} text="Pasta Paradise"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={uri4} text="Chicken Chop"></Slide></SwiperSlide>
        <SwiperSlide ><Slide uri={uri6} text="Skewers"></Slide></SwiperSlide>
      
     
      </Swiper>
    </div>
  )
}

export default Slides