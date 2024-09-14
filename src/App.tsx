/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeNavBar from './components/home/HomeNav';
import Home from './components/home/Home';
import About from './components/about/About';
import LandingPage from './pages/LandingPage';
import PopularRoutes from './components/Route/PopularRoutes';
import Footer from './components/footer/Footer';
import OtherNavBar from './components/home/OtherNav';
import AvailableCar from './components/AvailableCar/AvailableCars';
import AvailableBuses from './pages/AvailableBuses';

const App: React.FC = () => {
  return (
    // <HomeNavBar></HomeNavBar>
    // <Home></Home>
    // <About></About>
    // <PopularRoutes></PopularRoutes>?
    // <LandingPage></LandingPage>
    // <Footer></Footer>
    // <OtherNavBar></OtherNavBar>
    // <AvailableBuses />
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/availableBuses' element={<AvailableBuses />} />

      </Routes>
    </Router>
  );
};

export default App;
