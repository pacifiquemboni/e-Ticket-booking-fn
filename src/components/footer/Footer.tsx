import React, { forwardRef, useState } from 'react';
import logo from '../../assets/images/logo.png';
import fb from '../../assets/images/fb.png';
import x from '../../assets/images/x.png';
import linkedin from '../../assets/images/linked.png';
import ig from '../../assets/images/ig.png';

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="h-auto bg-primary">
      <div className="h-auto text-white mx-5 md:mx-24 flex flex-col md:flex-row md:justify-between pt-5">
        <div className='flex flex-row justify-between w-full md:w-2/5'>
          <div>
          <img src={logo} alt="logo" className="h-12 sm:h-14 ml-2 bg-white" />
          <h1 className='text-2xl'>Travel Agency</h1>
          <p className='text-xs'>Kigali-Rwanda</p>
          <p className='text-xs'>07872****1/07299***3</p>
          <div className='bg-primary rounded-2xl flex p-5 w-40 md:w-56 justify-between'>
            <img src={fb} alt="fb" />
            <img src={x} alt="x" />

            <img src={linkedin} alt="linkedin" />

            <img src={ig} alt="instergram" />
          </div>
        </div>
        <div>
          <p className='text-2xl underline'>For Clients</p>
          <p className='text-xs'>About Us</p>
          <p className='text-xs'>How it Works</p>
          <p className='text-xs'>FAQs</p>
          <p className='text-xs'>Contact</p>
          <p className='text-xs'>Our Routes</p>
        </div>
        </div>
        <div className='flex flex-row justify-between w-full md:w-2/5'>
        <div>
        <p className='text-2xl underline'>Contact Us</p>
        <p className='text-xs'>Monday - Sunday</p>
        <p className='text-xs'>08:00 AM - 23:00 PM (CST)</p>
        <p className='text-xs'>HotLine</p>
        <p className='text-xs'>2**1</p>
        <p className='text-xs'>Email</p>
        <p className='text-xs'>trav****y@gmail.com</p>
        </div>
          <div>
        <p className='text-2xl underline'>Resources</p>
        <p className='text-xs'>Login</p>
        <p className='text-xs'>Register</p>
        </div>
        
        </div>
        
      </div>
      <hr className='h-1 bg-white'/>
      <div className='h-16 text-white flex justify-center'>
        <h1>travel Agency Copyright 2024</h1>
      </div>
    </div>
  );
});

export default Footer;
