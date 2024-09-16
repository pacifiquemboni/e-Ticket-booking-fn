/* eslint-disable prettier/prettier */
import React, { useReducer, useRef } from 'react';
import Home from '../components/home/Home';
import About from '../components/about/About';
import HomeNavBar from '../components/home/HomeNav';
import PopularRoutes from '../components/Route/PopularRoutes';
import FAQs from '../components/Faqs/Faqs';
import Footer from '../components/footer/Footer';
import OtherNavBar from '../components/home/OtherNav';
import AvailableCars from '../components/AvailableCar/AvailableCars';
import ProfileInfo from '../components/profile/profileinfo';

const Profile: React.FC = () => {
 
  return (
    <>
      <OtherNavBar></OtherNavBar>
      <ProfileInfo />
      <Footer></Footer>
    </>
  );
};

export default Profile;
