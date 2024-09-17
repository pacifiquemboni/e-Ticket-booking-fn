/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeNavBar from './components/home/HomeNav';
import Home from './components/home/Home';
import About from './components/about/About';
import LandingPage from './pages/LandingPage';
import PopularRoutes from './components/Route/PopularRoutes';
import Footer from './components/footer/Footer';
import OtherNavBar from './components/home/OtherNav';
import AvailableCar from './components/AvailableCar/AvailableCars';
import AvailableBuses from './pages/AvailableBuses';
import SeatPlan from './components/seatPlan/SeatPlan';
import SelectSeats from './pages/SelectSeat';
import ProfileInfo from './components/profile/profileinfo';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/availableBuses" element={<AvailableBuses />} />
        <Route path="/selectseats" element={<SelectSeats />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
