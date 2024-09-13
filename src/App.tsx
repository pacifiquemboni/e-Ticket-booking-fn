/* eslint-disable prettier/prettier */
import React from 'react';
import HomeNavBar from './components/home/HomeNav';
import Home from './components/home/Home';
import About from './components/about/About';
import LandingPage from './pages/LandingPage';
import PopularRoutes from './components/Route/PopularRoutes';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    // <HomeNavBar></HomeNavBar>
    // <Home></Home>
    // <About></About>
    // <PopularRoutes></PopularRoutes>?
    <LandingPage></LandingPage>
    // <Footer></Footer>
  );
};

export default App;
