/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import notification from '../../assets/images/notification.svg';
import cart from '../../assets/images/cart.svg';
import profile from '../../assets/images/profile.png';
import arrowdown from '../../assets/images/arrowdown.svg';
import menu from '../../assets/images/Menu.png'
import ticket from '../../assets/images/ticket.png'
import user from '../../assets/images/user.png'
import logout from '../../assets/images/logout.png'

interface HomeNavBarProps {
  scrollToAbout: () => void;
  scrollToRoutes: ()=> void;
  scrollToFaqs: () => void;
}

const HomeNavBar: React.FC<HomeNavBarProps> = ({ scrollToAbout, scrollToRoutes, scrollToFaqs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const toggleProfile = () =>{
    setProfileOpen(!profileOpen)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="h-16 bg-primary flex items-center sticky top-0 z-50"> {/* Add sticky and z-index */}
        <div className="h-20 w-full px-4 lg:px-24 flex justify-between items-center">
          {/* Left side (logo and links) */}
          <div className="flex items-center gap-4 lg:gap-10">
            <img src={logo} alt="logo" className="h-12 sm:h-14 ml-2 bg-white" />
            <div className="hidden lg:flex items-center ml-4 space-x-4 text-white">
              <a href="#">Home</a>
              <a href="#" onClick={scrollToAbout}>About</a>
              <a href="#" onClick={scrollToRoutes}>Routes</a>
              <a href="#" onClick={scrollToFaqs}>FAQs</a>
            </div>
          </div>

          {/* Right side (icons and profile) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={notification}
              alt="notification"
              className="h-6 sm:h-6 ml-2"
            />
            <img
              src={cart}
              alt="cart"
              className="h-6 sm:h-6 ml-2"
            />
            <div className="flex items-center">
              <img
                src={profile}
                alt="profile"
                className="h-6 sm:h-10 ml-2 bg-white rounded-full"
                onClick={toggleProfile}
              />
              <img src={arrowdown} alt="arrowdown" className="h-2 ml-2" />
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden flex items-center text-white"
            onClick={toggleMenu}
          >
            <img src={menu} alt="menu" className='h-5' />
              
          </button>
        </div>
        {profileOpen && (
          <div className='bg-primary absolute w-auto h-44 top-16 right-24 rounded-tl-2xl '>
            <div className='bg-second h-16 w-auto rounded-tl-2xl flex items-center p-1 gap-1'>
            <img
                src={profile}
                alt="profile"
                className="h-5 sm:h-9 ml-2 bg-white rounded-full"
                onClick={toggleProfile}
              />
              <div className='text-white text-xs'>
                <p className='font-bold'>Pacifique Mbonimana</p>
                <p>pacifiquemboni@gmail.com</p>
              </div>
            </div>
            <span className='flex  text-white gap-2 mt-3'>
              <img src={ticket} alt="ticket" className="h-6 sm:h-6 ml-8 "/>
              My Tickets
            </span>
            <span className='flex  text-white gap-2 mt-3'>
              <img src={user} alt="user" className="h-6 sm:h-6 ml-8 "/>
             Profile
            </span>
            <span className='flex  text-white gap-2 mt-3'>
              <img src={logout} alt="logout" className="h-6 sm:h-6 ml-8 "/>
              Logout
            </span>

          </div>
        )}

        {/* Mobile Navigation (Dropdown links) */}
        {menuOpen && (
          <div className="lg:hidden absolute flex flex-col right-0 top-16 items-end px-14 py-2  rounded space-y-2 bg-primary text-white">
            <a href="#">Home</a>
            <a href="#" onClick={scrollToAbout}>About</a>
            <a href="#" onClick={scrollToRoutes}>Routes</a>
            <a href="#" onClick={scrollToFaqs}>FAQs</a>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeNavBar;

