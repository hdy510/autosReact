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


function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [spotlightOpacity, setSpotlightOpacity] = useState(0);
  const [peopleOpacity, setPeopleOpacity] = useState(0);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;

    setActiveIndex(swiper.activeIndex);

    if (newIndex <= 2) {
      setSpotlightOpacity(0); // Section3 또는 그 이전이면 spotlight 사라짐
    } else if (newIndex >= 3 && newIndex <= 6) {
      setSpotlightOpacity(1); // Section4 spotlight 보임
    } else if (newIndex >= 7) {
      setSpotlightOpacity(0); // Section4 이후면 spotlight 사라짐
    }

    if (newIndex <= 7) {
      setPeopleOpacity(0); // Section6 이전엔 사람들 안보임
    } else if (newIndex >= 8) {
      setPeopleOpacity(1); // Section6 또는 그 이후면 사람들 보임
    }
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
      <Section4 activeIndex={activeIndex} spotlightOpacity={spotlightOpacity} />
      <Section5 activeIndex={activeIndex} />
      <Section6 activeIndex={activeIndex} peopleOpacity={peopleOpacity} />
      
    </>
  );
}

export default App;
