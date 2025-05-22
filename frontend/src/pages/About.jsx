import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About FitWear" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            FitWear was born from a passion for innovation and a desire to revolutionize the activewear experience. 
            Our mission started with a simple idea: to create high-performance apparel that combines comfort, durability, and style.
          </p>
          <p>
            From our earliest designs to today’s expansive collection, we’ve remained committed to quality and performance. 
            Whether you're training, lounging, or living your everyday life, FitWear delivers gear you can trust—crafted from premium materials and tested for excellence.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            At FitWear, our mission is to empower individuals through thoughtfully designed activewear that supports movement and motivation. 
            We’re committed to offering a seamless shopping experience with exceptional service, fast delivery, and a brand you can stand behind.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            Every product is carefully designed and tested to meet the highest standards of quality, durability, and performance.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Effortless Convenience</b>
          <p className='text-gray-600'>
            Our user-friendly website, streamlined checkout process, and fast shipping make shopping with us simple and stress-free.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Support</b>
          <p className='text-gray-600'>
            Our dedicated team is here to help every step of the way—because your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
