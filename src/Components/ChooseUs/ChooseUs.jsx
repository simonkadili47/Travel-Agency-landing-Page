import React from 'react';
import icon1 from '../ChooseUs/icon1.png';
import icon2 from '../ChooseUs/icon2.png';
import icon3 from '../ChooseUs/icon3.png';

function ChooseUs() {
  return (
    <div className='bg-white py-8 px-4 md:px-8'>
      <div className='text-center md:text-left'>
        <h1 className='text-2xl font-bold mb-4'>
          Why <span className='text-orange-500 font-bold'>Choose</span> Us
        </h1>
        <p className='text-gray-400 mb-4'>
          We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.
        </p>
        <button className='border border-orange-500 text-orange-400 text-lg px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300'>
          Learn More
        </button>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:mt-8'>
        <div className='flex flex-col items-center md:items-start mb-8 md:mb-0'>
          <img src={icon1} alt="Best Travel Agency" className='w-16 h-16 mb-3 pt-2' />
          <h2 className='font-bold text-gray-500 text-xl mb-2'>Best Travel Agency</h2>
          <p className='text-gray-400 text-center md:text-left'>Travel agencies that provide round trip, one way, and multi trip services.</p>
        </div>
        <div className='flex flex-col items-center md:items-start mb-8 md:mb-0'>
          <img src={icon2} alt="Competitive Price" className='w-16 h-16 mb-3' />
          <h2 className='font-bold text-gray-500 text-xl mb-2'>Competitive Price</h2>
          <p className='text-gray-400 text-center md:text-left'>The price offered are affordable starting from the ordinary to the exclusive.</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <img src={icon3} alt="Global Coverage" className='w-16 h-16 mb-3' />
          <h2 className='font-bold text-gray-500 text-xl mb-2'>Global Coverage</h2>
          <p className='text-gray-400 text-center md:text-left'>There are many tourist attractions, hotels, and interesting entertainment.</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
