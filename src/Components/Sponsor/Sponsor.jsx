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
    <div className='grid grid-cols-4 gap-y-1 px-52 pt-6'>
      <img src={Airbnb} alt="Airbnb Logo" />
      <img src={Amazon} alt="Amazon Logo" />
      <img src={FedEx} alt="FedEx Logo" />
      <img src={Google} alt="Google Logo" />
      <img src={Microsoft} alt="Microsoft Logo" />
      <img src={OLA} alt="OLA Logo" />
      <img src={Walmart} alt="Walmart Logo" />
      <img src={OYO} alt="OYO Logo" />
    </div>
  );
}

export default Sponsor;
