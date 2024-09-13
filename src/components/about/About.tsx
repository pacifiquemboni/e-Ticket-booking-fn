/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import React,{ forwardRef } from 'react';
import aboutImg from '../../assets/images/aboutImg.png';
import aboutCar from '../../assets/images/aboutCar.png';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div className=" h-auto" ref={ref}>
        <div className="lg:mx-24 md:mx-24 h-auto text-primary p-4">
          <h1 className='pt-10 text-2xl'>About Us</h1>
          <hr className="w-20  bg-primary p-1" />
          <div className="flex flex-col lg:flex-row pt-5 gap-5">
            <p className="w-fit sm:w-full text-xl ">
              We are a modern travel agency dedicated to providing seamless
              ticket booking through our user-friendly web app. We offer a wide
              range of travel options, including flights, trains, and buses, all
              with real-time updates and secure payments. Our mission is to
              simplify your travel planning by allowing you to search, compare,
              and book tickets effortlessly. With personalized recommendations
              and 24/7 support, we ensure a stress-free and accessible travel
              experience for all.
            </p>
            <div className="w-fit sm:w-full flex flex-col items-center ">
              <img src={aboutImg} alt="about image"  className='w-fit sm:w-full h-80 '/>
            </div>

            <div className="w-full sm:w-full flex flex-col items-center justify-center ">
              <div className="bg-primary text-white flex flex-col items-center h-32 rounded-md justify-center w-full sm:w-full ">
                <h1 className="text-4xl w-fit sm:w:full">+ 10 years</h1> <p>experience</p>
              </div>
              <img src={aboutCar} alt="about car" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
