/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import bgimage from '../../assets/images/homebg.png';
import HomeNavBar from './HomeNav';
import BookForm from './BookForm';
import man from '../../assets/images/man.png';
import About from '../about/About';
import BookForm2 from './BookForm2';

const Home: React.FC = () => {
  
  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative overflow-hidden "
        style={{ backgroundImage: `url(${bgimage})`, backgroundAttachment:"fixed" }}
      >
       
        <div className="lg:mx-24 md:mx-14 flex flex-col gap-8 sm:gap-4 xs:gap-2 justify-between">
          <h1 className="text-4xl text-white pt-7">Welcome Pacifique!</h1>
          <BookForm2 />
        </div>
        <img
          src={man}
          alt="man"
          className="absolute h-96 -right-20 -bottom-16 hidden md:block"
        />
      </div>

      
    </>
  );
};

export default Home;
