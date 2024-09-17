/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import Footer from '../components/footer/Footer';
import OtherNavBar from '../components/home/OtherNav';
import AvailableCars from '../components/AvailableCar/AvailableCars';
import SeatPlan from '../components/seatPlan/SeatPlan';

const SelectSeats: React.FC = () => {
  

  return (
    <>
      <OtherNavBar></OtherNavBar>
      <SeatPlan />
      <Footer></Footer>
    </>
  );
};

export default SelectSeats;
