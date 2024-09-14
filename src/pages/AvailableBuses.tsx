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

const AvailableBuses: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null); // Reference to the About section
  const routesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the About section smoothly
    }
  };
  const scrollToRoutes = () => {
    if (routesRef.current) {
      routesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToFaqs = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <OtherNavBar></OtherNavBar>
      <AvailableCars></AvailableCars>
      <Footer></Footer>
    </>
  );
};

export default AvailableBuses;
