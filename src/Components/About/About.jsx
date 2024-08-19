import React from 'react';
import vacation_image from '../About/vacation2.webp';


function About() {
  return (
    <div className='bg-[#F7F8FC] py-8 px-8 md:px-20 mt-8 mr-24 pb-2'>
      <div className='flex justify-center flex-grow'>
        <img 
          src={vacation_image} 
          alt="Vacation" 
          className='h-96 object-cover w-auto pr-12'
        />
        <div className='flex flex-col ml-8 mt-12'>
          <h1 className='text-orange-500'>ABOUT US</h1>
          <h1 className='font-bold text-2xl'>The Best And Most</h1> 
          <h1 className='font-bold text-xl'>
            trusted <span className='font-bold text-xl text-orange-500'>service</span>
          </h1>
          <p className='pt-2 text-gray-400'>
            We are the largest holiday service provider in the world with
          </p>
          <p className='text-gray-400'>
            partners and places spread all over the world by prioritizing service
          </p>
          <p className='text-gray-400'>
            and customer satisfaction.
          </p>
          <div>
            <button className='bg-orange-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 my-5'>
              Learn More
            </button>
          </div>
          <div className='flex items-center'>
            <div className='text-center mr-4'>
              <h2 className='text-orange-500 font-bold text-xl'>200+</h2>
              <p className='text-gray-400'>customers</p>
              <p className='text-gray-400'>& partners</p>
            </div>
            <div className='text-center mx-3'>
              <h2 className='text-orange-500 font-bold text-xl'>500+</h2>
              <p className='text-gray-400'>Place in</p>
              <p className='text-gray-400'>The World</p>
            </div>
            <div className='text-center mx-3'>
              <h2 className='text-orange-500 font-bold text-xl'>1K+</h2>
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
