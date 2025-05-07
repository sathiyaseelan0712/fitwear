import React, { useEffect, useState, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ShopNowBtn from './ShopNowBtn';

const Slider = () => {
  const SliderData = [
    {
      title: 'Jackets & Coats',
      subtitle: 'Quality Matters.'
    },
    {
      title: 'Find The Best Outfit',
      subtitle: 'With 30% Off'
    },
    {
      title: 'The Best Shoes',
      subtitle: 'Comfort For your long day'
    },
    {
      title: 'Next Season Is here',
      subtitle: 'Enjoy your summer with us.'
    }
  ];

  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const [auto, setAuto] = useState(true);
  const intervalTime = 6000;
  const slideIntervalRef = useRef();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    if (auto) {
      slideIntervalRef.current = setInterval(nextSlide, intervalTime);
    }

    return () => {
      setAuto(false);
      clearInterval(slideIntervalRef.current);
    };
  }, [auto, current]);

  return (
    <div className='slider'>
      {SliderData.map((slide, index) => (
        <div key={index} className={index === current ? 'slide current' : 'slide'}>
          <h1 className='titleslider'>{slide.title}</h1>
          <h3 className='subtitleslider'>{slide.subtitle}</h3>
          <div className='content'>
            <Link to='/Shop'>
              <ShopNowBtn />
            </Link>
          </div>
        </div>
      ))}
      <IoIosArrowForward className='next' size='32' onClick={nextSlide} />
      <IoIosArrowBack className='prev' size='32' onClick={prevSlide} />
    </div>
  );
};

export default Slider;
