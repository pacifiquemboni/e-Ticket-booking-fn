/* eslint-disable prettier/prettier */
import React from 'react';
import Footer from '../components/footer/Footer';
import OtherNavBar from '../components/home/OtherNav';
import Login from '../components/login/login';
import Register from '../components/login/Register';

const RegisterPage: React.FC = () => {
  

  return (
    <>
      <OtherNavBar></OtherNavBar>
      <Register />
      <Footer></Footer>
    </>
  );
};

export default RegisterPage;
