import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import Section7 from './components/Section7/Section7';
import Section8 from './components/Section8/Section8';
import Section9 from './components/Section9/Section9';
import Section10 from './components/Section10/Section10';

function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  

  return (
    <>
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        direction={'vertical'}
        modules={[ Mousewheel ]}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide><div className='section'>slide1</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide2</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide3</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide4</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide5</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide6</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide7</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide8</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide9</div></SwiperSlide>
        <SwiperSlide><div className='section'>slide10</div></SwiperSlide>
      </Swiper>

      <Section1 activeIndex={activeIndex} />
      <Section2 activeIndex={activeIndex} />
      <Section3 activeIndex={activeIndex} />
      <Section4 activeIndex={activeIndex} />
      <Section5 activeIndex={activeIndex} />
      <Section6 activeIndex={activeIndex} />
      <Section7 activeIndex={activeIndex} />
      <Section8 activeIndex={activeIndex} />
      <Section9 activeIndex={activeIndex} />
      <Section10 activeIndex={activeIndex} />

      
    </>
  );
}

export default App;
