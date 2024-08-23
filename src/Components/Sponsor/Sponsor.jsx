import React from 'react';
import Airbnb from '../Sponsor/Airbnb Logo.png';
import Amazon from '../Sponsor/Amazon logo.png';
import FedEx from '../Sponsor/FedEx Logo.png';
import Google from '../Sponsor/Google Logo.png';
import Microsoft from '../Sponsor/Microsoft Logo.png';
import OLA from '../Sponsor/OLA Logo.png';
import Walmart from '../Sponsor/Walmart Logo.png';
import OYO from '../Sponsor/OYO Logo.png';

function Sponsor() {
  return (
    <div className='px-4 md:px-8 py-6'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        <img src={Airbnb} alt="Airbnb Logo" className='object-contain h-12' />
        <img src={Amazon} alt="Amazon Logo" className='object-contain h-12' />
        <img src={FedEx} alt="FedEx Logo" className='object-contain h-12' />
        <img src={Google} alt="Google Logo" className='object-contain h-12' />
        <img src={Microsoft} alt="Microsoft Logo" className='object-contain h-12' />
        <img src={OLA} alt="OLA Logo" className='object-contain h-12' />
        <img src={Walmart} alt="Walmart Logo" className='object-contain h-12' />
        <img src={OYO} alt="OYO Logo" className='object-contain h-12' />
      </div>
    </div>
  );
}

export default Sponsor;
