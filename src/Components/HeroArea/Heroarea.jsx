import React from 'react';
import vacation_image from '../../Components/HeroArea/vacation3.webp';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

function Heroarea() {
  const [startDate, setStartDate] = React.useState(null);

  return (
    <div className='flex flex-col items-center pt-4'>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row items-start justify-between px-8 md:px-16'>
          <div className='text-center md:text-left'>
            <h1 className='font-bold text-3xl md:text-4xl'>It’s a Big World</h1>
            <h1 className='font-bold text-3xl md:text-4xl'>Out There, Go</h1>
            <h1 className='font-bold text-3xl md:text-4xl text-orange-500'>Explore</h1>
          </div>
          <div className='mt-4 md:mt-0 md:ml-10 w-full max-w-md px-4'>
            <p className='text-center md:text-left text-gray-600 leading-relaxed'>
              Time tracking software used by millions. A simple time tracker
            </p>
            <p className='text-center md:text-left text-gray-600 leading-relaxed'>
              and timesheet app that lets you track work hours across projects.
            </p>
            <div className='mt-4 text-center md:text-left'>
              <button className='bg-orange-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300'>
                DISCOVER NOW
              </button>
            </div>
          </div>
        </div>
        <div className='relative mt-8 w-full px-4 md:px-8 lg:px-16'>
          <img
            src={vacation_image}
            alt="Vacation"
            className='w-full h-auto object-cover rounded-lg'
          />
          <div className='relative mt-8'>
            <div className='px-4 md:px-8 lg:px-16 pb-14'>
              <div className='relative overflow-hidden'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  {/* From Dropdown */}
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
                  {/* To Dropdown */}
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
                  {/* Dates Picker */}
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
                  {/* Guests Dropdown */}
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
                  {/* Search Button */}
                  <div className='w-full md:w-1/5 flex items-center'>
                    <button className='bg-orange-500 text-white py-2 px-3 rounded-sm hover:bg-orange-600 transition duration-300 flex items-center'>
                      <FaSearch className='mr-2' />
                      Search
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
