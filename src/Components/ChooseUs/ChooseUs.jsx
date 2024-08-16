import React from 'react'

import icon1 from 'Components/ChooseUs/icon1.png';
import icon2 from 'Components/ChooseUs/icon2.png';
import icon3 from 'Components/ChooseUs/icon3.png';



function ChooseUs() {
  return (
    <div className='flex justify-start pt-10 pl-24'>
        <div className=''>
            <h1 className='text-2xl font-bold'>Why<span className='text-orange-500 font-bold text-2xl'> Choose</span> Us</h1>
           <div className='pt-3 text-gray-400'>
            <p >We ensure that you’ll embark on a perfectly </p>
            <p>planned, safe vacation at a price you can afford.</p>
            <div>
                 <button className='border border-orange-500 mt-4 text-orange-400 text-lg px-3 rounded-md pt-1 pb-1 hover:bg-orange-500 hover:text-white hover:border-orange-500'>
                 Learn More
                 </button>
            </div>
            </div>
            
        </div>
        <div className='pt-9 pl-5'>
            <div className='flex'>
            <div className=' border-r-2 pr-10 '>
            <img src={icon1} alt="" /> 
            <h1 className='font-bold text-gray-500 mt-3'>Best Travel Agency</h1>
            <p className=' text-gray-400'>Travel agencies that provide round</p>
            <p className=' text-gray-400'>  trip, one way, and multi trip services.</p>
            </div>
            <div className='ml-4  border-r-2 pr-2'>
            <img src={icon2} alt="" /> 
            <h1 className='font-bold text-gray-500 mt-3'>Competitive Price</h1>
          
            <p className=' text-gray-400'>The price offered are affordable starting</p>
            <p className=' text-gray-400'>    from the ordinary to the exclusive.</p>
            </div>
            <div className='ml-4'>
            <img src={icon3} alt="" /> 
            <h1 className='font-bold text-gray-500 mt-3'>Global Coverage</h1>
            <p className=' text-gray-400'>There are many tourist attractions,</p>
            <p className=' text-gray-400'>    hotels and interesting entertainment.</p>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default ChooseUs