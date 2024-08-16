import React from 'react';
import vacation_image from '../../Components/HeroArea/vacation3.webp';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { IoIosPeople } from "react-icons/io";


function Heroarea() {
  const [startDate, setStartDate] = React.useState(null);

  return (
    <div className='flex flex-col items-center pt-4'>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row items-start justify-between px-8 pl-32'>
          <div>
            <h1 className='font-bold text-3xl'>It’s a Big World</h1>
            <h1 className='font-bold text-3xl'>Out There, Go</h1>
            <h1 className='font-bold text-3xl text-orange-500'>Explore</h1>
          </div>
          <div className='mt-4 md:mt-0 md:ml-20 w-full max-w-md pr-28'>
            <p className='break-words'>
              Time tracking software used by millions. A simple time tracker and timesheet app that lets you track work hours across projects.
            </p>
            <div className='mt-4'>
              <button className='bg-orange-500 text-white text-sm py-2 px-4 rounded-sm hover:bg-orange-600 transition duration-300'>
                DISCOVER NOW
              </button>
            </div>
          </div>
        </div>
        <div className='relative mt-8 w-full px-10 md:px-20 pb-14'>
          <div className='relative'>
            <img
              src={vacation_image}
              alt="Vacation"
              className='w-full h-auto object-cover'
            />
            {/* <MdPlayCircle className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-500 text-6xl' /> */}
            <div className='absolute -bottom-16 left-0  right-0 px-8 py-6 mx-5 '>
              <div className='w-full bg-white shadow-lg px-8 py-6 rounded-lg'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <div className='w-full md:w-1/5 mb-4 md:mb-0'>
                    <label className='block text-sm font-medium text-gray-700'>From</label>
                    <div className='relative mt-1'>
                      <FaMapMarkerAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                      <select className='pl-10 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm'>
                        <option>Bali, Indonesia</option>
                        <option>City A</option>
                        <option>City B</option>
                        <option>City C</option>
                      </select>
                    </div>
                  </div>
                  <div className='w-full md:w-1/5 mb-4 md:mb-0'>
                    <label className='block text-sm font-medium text-gray-700'>To</label>
                    <div className='relative mt-1'>
                      <FaMapMarkerAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                      <select className='pl-10 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm'>
                        <option>Bali, Indonesia</option>
                        <option>City D</option>
                        <option>City E</option>
                        <option>City F</option>
                      </select>
                    </div>
                  </div>
                  <div className='w-full md:w-1/5 mb-4 md:mb-0 relative'>
                    <label className='block text-sm font-medium text-gray-700'>Dates</label>
                    <div className='relative mt-1'>
                      <FaCalendarAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500' />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Select a date"
                        className='pl-10 w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                      />
                    </div>
                  </div>
                  <div className='w-full md:w-1/5 mb-4 md:mb-0 relative'>
                    <label className='block text-sm font-medium text-gray-700'>Guests</label>
                    <div className='relative mt-1'>
                      <IoIosPeople className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                      <select className='pl-10 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm'>
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                      </select>
                    </div>
                  </div>
                  <div className='w-full md:w-1/5 flex items-center'>
                    <button className='bg-orange-500 text-white py-2 px-3 mt-3 rounded-sm hover:bg-orange-600 transition duration-300 flex items-center'>
                      <FaSearch className='mr-2' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroarea;
