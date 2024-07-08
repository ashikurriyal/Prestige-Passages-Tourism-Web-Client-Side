// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'

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
      <SwiperSlide>
        <div className='w-full lg:h-[calc(100vh-86px)] relative'>
          <img className='w-full lg:h-[calc(100vh-86px)]' src="https://i.ibb.co/HNR4kC7/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg" alt="" />
          <div className='App absolute lg:top-60 lg:left-60 top-5 left-0'>
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0' }}
            className='lg:text-8xl text-4xl font-bold text-white font-merriweather'>
              Forge Your Path, Share Your <br />{' '}
              <span className='font-bold text-sky-500 font-merriweather'>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Love', 'Passages']}
                  loop={5}
                  cursor
                  cursorStyle='.'
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className='w-full lg:h-[calc(100vh-86px)]'><img className='w-full lg:h-[calc(100vh-86px)]' src="https://i.ibb.co/MnZm9Bm/jakob-owens-5-F-c9i3-JP0-I-unsplash.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='w-full lg:h-[calc(100vh-86px)]'><img className='w-full lg:h-[calc(100vh-86px)]' src="https://i.ibb.co/bRQPFhs/fahim-muntashir-Yx4j-Rc-Vhp-X8-unsplash.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='w-full lg:h-[calc(100vh-86px)]'><img className='w-full lg:h-[calc(100vh-86px)]' src="https://i.ibb.co/pnSkbnL/domino-studio-Eq-Q9o-Q0b-Lis-unsplash.jpg" alt="" /></div></SwiperSlide>


    </Swiper>
  );
};

export default Banner;