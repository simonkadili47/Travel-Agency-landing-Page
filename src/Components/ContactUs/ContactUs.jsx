import React from 'react';
import customer_name1 from '../ContactUs/Customer name1.png';
import { FaStar } from 'react-icons/fa'; // Importing the star icon

function ContactUs() {
  return (
    <div className='flex flex-col items-center justify-center -mt-20'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Contact Us To Review</h1>
        <p className='font-bold text-3xl'>
          <span className='text-3xl text-orange-500 font-bold'>your experience</span> with us
        </p>
        <p className='pt-3 text-gray-400 text-sm'>
          Give us feedback and let us know what experiences you
        </p>
        <p className='text-gray-400 text-sm'>
          had while on vacation with us
        </p>
      </div>
      <div className='w-full mt-3'> 
        <p className='text-4xl text-left ml-28 text-orange-500'>“</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2'>
        <div className='border-2 p-4 text-gray-400 bg-white'>
          <p>Wow, what a fun vacation with</p>
          <p>Oelinken, guided by professional</p>
          <p>people</p>
          <img className='mt-4' src={customer_name1} alt="" />
          <div className='flex -mt-4 ml-16 gap-2'>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-gray-300' />
          </div>
        </div>
        <div className='border-2 p-4 text-gray-400 bg-white'>
          <p>Wow, what a fun vacation with</p>
          <p>Oelinken, guided by professional</p>
          <p>people</p>
          <img className='mt-4' src={customer_name1} alt="" />
          <div className='flex -mt-4 ml-16 gap-2'>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-gray-300' />
          </div>
        </div>
        <div className='border-2 p-4 text-gray-400 bg-white'>
          <p>Wow, what a fun vacation with</p>
          <p>Oelinken, guided by professional</p>
          <p>people</p>
          <img className='mt-4' src={customer_name1} alt="" />
          <div className='flex -mt-4 ml-16 gap-2'>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-gray-300' />
          </div>
        </div>
        <div className='border-2 p-4 text-gray-400 bg-white'>
          <p>Wow, what a fun vacation with</p>
          <p>Oelinken, guided by professional</p>
          <p>people</p>
          <img className='mt-4' src={customer_name1} alt="" />
          <div className='flex -mt-4 ml-16 gap-2'>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-gray-300' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
