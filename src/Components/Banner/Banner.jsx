// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><div className='w-full lg:h-[calc(100vh-86px)]'><img className='w-full lg:h-[calc(100vh-86px)]' src="https://i.ibb.co/HNR4kC7/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='w-full lg:h-[calc(100vh-86px)]'><img className='w-full lg:h-[calc(100vh-86px)]' src="https://i.ibb.co/MnZm9Bm/jakob-owens-5-F-c9i3-JP0-I-unsplash.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='w-full lg:h-[calc(100vh-86px)]'><img className='w-full lg:h-[calc(100vh-86px)]' src="https://i.ibb.co/bRQPFhs/fahim-muntashir-Yx4j-Rc-Vhp-X8-unsplash.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='w-full lg:h-[calc(100vh-86px)]'><img className='w-full lg:h-[calc(100vh-86px)]' src="https://i.ibb.co/pnSkbnL/domino-studio-Eq-Q9o-Q0b-Lis-unsplash.jpg" alt="" /></div></SwiperSlide>
      
      
    </Swiper>
  );
};

export default Banner;