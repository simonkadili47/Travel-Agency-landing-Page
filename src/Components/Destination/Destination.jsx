import React from 'react';
import image_1 from '../Destination/image1.webp';
import image_2 from '../Destination/image2.webp';
import image_3 from '../Destination/image3.webp';
import image_4 from '../Destination/image4.webp';
import image_5 from '../Destination/image5.webp';
import image_6 from '../Destination/image6.webp';
import image_7 from '../Destination/image7.webp';
import image_8 from '../Destination/image8.webp';
import { FaMapMarkerAlt, FaStar, FaArrowRight } from 'react-icons/fa';

const Navlinks = [
  { id: "1", name: "Special Deals", link: "/#SpecialDeals" },
  { id: "2", name: "Popular", link: "/#Popular" },
  { id: "3", name: "Recommendation", link: "/#Recommendation" },
  { id: "4", name: "Best Price", link: "/#BestPrice" },
];

function Destination() {
  const renderCard = (image, location, place, days, price) => (
    <div className='flex flex-col items-start border rounded-lg px-2 py-2 mt-4 bg-white shadow-md'>
      <img src={image} alt={place} className='w-full h-60 object-cover rounded-t-lg' />
      <div className='w-full pb-2 mt-2'>
        <div className='flex justify-between items-center text-sm'>
          <div className='flex items-center'>
            <FaMapMarkerAlt className='mr-1 text-orange-500' />
            <p>{location}</p>
          </div>
          <div className='flex items-center'>
            <FaStar className='text-yellow-500 mr-1' />
            <span>4.7</span>
          </div>
        </div>
        <p className='mt-2 text-md font-bold'>{place}</p>
        <p className='mt-2 text-sm'>{days}</p>
        <div className='flex items-center justify-between mt-2'>
          <p className='text-orange-500 font-bold text-xl'>{price}</p>
          <span className='text-sm flex items-center'>
            <p>View more</p>
            <FaArrowRight className='ml-2' />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className='flex flex-col items-center mt-8 px-4'>
      <h1 className='text-center text-2xl font-semibold mb-4'>
        The <span className='font-bold text-orange-500'>best place</span> for vacation
      </h1>
      <div className='md:hidden flex space-x-4 mb-4 text-sm'>
        {Navlinks.map((link) => (
          <a 
            key={link.id} 
            href={link.link} 
            className='text-gray-800 hover:text-orange-500 hover:underline'
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        {renderCard(image_1, "Maldives", "Huruwalhi", "7 Days Tour on 2 person", "$620")}
        {renderCard(image_2, "Indonesia", "Bali Province", "4 Days 2 person", "$780")}
        {renderCard(image_3, "Spain", "Barcelona City Beach", "4 Days Tour on 4 person", "$850")}
        {renderCard(image_4, "Maldives", "Huruwalhi", "7 Days Tour on 2 person", "$620")}
        {renderCard(image_5, "Maldives", "Huruwalhi", "7 Days Tour on 2 person", "$620")}
        {renderCard(image_6, "Indonesia", "Bali Province", "4 Days 2 person", "$780")}
        {renderCard(image_7, "Spain", "Barcelona City Beach", "4 Days Tour on 4 person", "$850")}
        {renderCard(image_8, "Maldives", "Huruwalhi", "7 Days Tour on 2 person", "$620")}
      </div>
      <div className='mt-8'>
        <button className='border border-orange-500 text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition duration-300'>
          View All
        </button>
      </div>
    </div>
  );
}

export default Destination;
