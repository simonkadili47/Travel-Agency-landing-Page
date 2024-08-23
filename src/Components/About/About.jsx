import React from 'react';
import vacation_image from '../About/vacation2.webp';

function About() {
  return (
    <div className='bg-[#F7F8FC] py-8 px-4 md:px-8 mt-8'>
      <div className='flex flex-col md:flex-row items-center'>
        <img 
          src={vacation_image} 
          alt="Vacation" 
          className='w-full md:w-1/2 h-auto object-cover mb-6 md:mb-0 md:pr-8'
        />
        <div className='flex flex-col md:w-1/2 md:ml-8'>
          <h1 className='text-orange-500 text-center md:text-left text-2xl md:text-3xl font-bold mb-4'>ABOUT US</h1>
          <h1 className='font-bold text-xl md:text-2xl mb-2'>The Best And Most</h1> 
          <h1 className='font-bold text-xl md:text-2xl'>
            trusted <span className='font-bold text-xl text-orange-500'>service</span>
          </h1>
          <p className='pt-2 text-gray-400 text-center md:text-left mb-2'>
            We are the largest holiday service provider in the world with
          </p>
          <p className='text-gray-400 text-center md:text-left mb-2'>
            partners and places spread all over the world by prioritizing service
          </p>
          <p className='text-gray-400 text-center md:text-left mb-4'>
            and customer satisfaction.
          </p>
          <div className='text-center md:text-left mb-6'>
            <button className='bg-orange-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300'>
              Learn More
            </button>
          </div>
          <div className='flex flex-col md:flex-row justify-center md:justify-start'>
            <div className='text-center md:text-left md:mr-8 mb-4 md:mb-0'>
              <h2 className='text-orange-500 font-bold text-xl md:text-2xl'>200+</h2>
              <p className='text-gray-400'>customers</p>
              <p className='text-gray-400'>& partners</p>
            </div>
            <div className='text-center md:text-left md:mx-8 mb-4 md:mb-0'>
              <h2 className='text-orange-500 font-bold text-xl md:text-2xl'>500+</h2>
              <p className='text-gray-400'>Place in</p>
              <p className='text-gray-400'>The World</p>
            </div>
            <div className='text-center md:text-left md:ml-8'>
              <h2 className='text-orange-500 font-bold text-xl md:text-2xl'>1K+</h2>
              <p className='text-gray-400'>Success</p>
              <p className='text-gray-400'>Journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
