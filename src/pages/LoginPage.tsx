/* eslint-disable prettier/prettier */
import React from 'react';
import Footer from '../components/footer/Footer';
import OtherNavBar from '../components/home/OtherNav';
import Login from '../components/login/login';

const LoginPage: React.FC = () => {
  

  return (
    <>
      <OtherNavBar></OtherNavBar>
      <Login />
      <Footer></Footer>
    </>
  );
};

export default LoginPage;
