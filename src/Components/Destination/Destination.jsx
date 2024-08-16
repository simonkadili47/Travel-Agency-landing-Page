import React from 'react';
import image_1 from '../Destination/image1.webp';
import image_2 from '../Destination/image2.webp';
import image_3 from '../Destination/image3.webp';
import image_4 from '../Destination/image4.webp';
import image_5 from '../Destination/image5.webp'
import image_6 from '../Destination/image6.webp'
import image_7 from '../Destination/image7.webp'
import image_8 from '../Destination/image8.webp'

import { FaMapMarkerAlt, FaStar, FaArrowRight } from 'react-icons/fa';

const Navlinks = [
  { id: "1", name: "Special Deals", link: "/#SpecialDeals" },
  { id: "2", name: "Popular", link: "/#Popular" },
  { id: "3", name: "Recommendation", link: "/#Recommendation" },
  { id: "4", name: "Best Price", link: "/#BestPrice" },
];

function Destination() {
  const renderCard = (image, location, place, days, price) => (
    <div className='flex flex-col items-start  border rounded-lg px-1 py-1 mt-4'>
      <img src={image} alt="" className='w-auto   h-60 object-cover rounded-t-lg' />
      <div className=' w-64  pb-2 mt-2'>
        <div className='flex justify-between items-center w-full text-sm'>
          <div className='flex items-center'>
            <FaMapMarkerAlt className='mr-1 text-orange-500' />
            <p>{location}</p>
          </div>
          <div className='flex items-center'>
            <FaStar className='text-yellow-500 mr-1' />
            <span>4.7</span>
          </div>
        </div>
        <p className='mt-2 pl-2 text-start text-md font-bold'>{place}</p>
        <p className='mt-2 pl-2 text-start text-sm'>{days}</p>
        <div className='flex items-center'>
          <p className='text-orange-500 font-bold text-2xl pl-2'>{price}</p>
          <span className='text-sm pl-24'><p>View more</p></span>
          <span className='text-sm pl-2'><FaArrowRight /></span> 
        </div>
      </div>
      
    </div>
  
  );

  return (
    <div className='flex flex-col items-center mt-16 font-normal text-xl'>
      <div>
        <h1 className='text-center'>
          The <span className='font-bold text-orange-500'>best place</span> for vacation
        </h1>
      </div>
      <div className='hidden md:flex space-x-10 mt-4 text-sm'>
        {Navlinks.map((link) => (
          <a 
            key={link.id} 
            href={link.link} 
            className='text-#222222 hover:text-orange-500 hover:underline underline-offset-4'
          >
            {link.name}
          </a>
        ))}
      </div> 
    
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8'>
        {renderCard(image_1, "Maldives", "Huruwalhi", "7 Days Tour on 2 person", "$620")}
        {renderCard(image_2, "Indonesia", "Bali Province", "4 Days 2 person", "$780")}
        {renderCard(image_3, "Spain", "Barcelona City Beach", "4 Days Tour on 4 person", "$850")}
        {renderCard(image_4, "Maldives", "Huruwalhi", "7 Days Tour on 2 person", "$620")}
      </div>

      {/* Repeat the cards with some space below */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-2'>
        {renderCard(image_5, "Maldives", "Huruwalhi", "7 Days Tour on 2 person", "$620")}
        {renderCard(image_6, "Indonesia", "Bali Province", "4 Days 2 person", "$780")}
        {renderCard(image_7, "Spain", "Barcelona City Beach", "4 Days Tour on 4 person", "$850")}
        {renderCard(image_8, "Maldives", "Huruwalhi", "7 Days Tour on 2 person", "$620")}
      </div>
      <div>
  <button className='border border-orange-500 mt-10 text-orange-400 text-lg px-3 rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500'>
    View All
  </button>
</div>
    </div>
  );
}

export default Destination;
