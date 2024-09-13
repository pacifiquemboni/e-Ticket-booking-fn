import React, { forwardRef, useState } from 'react';
import arrow from '../../assets/images/Arrow.png';

// Fixed routes data
const routes = [
  { from: 'Kigali', to: 'Nyagatare', distance: '230 km' },
  { from: 'Kigali', to: 'Musanze', distance: '110 km' },
  { from: 'Kigali', to: 'Huye', distance: '135 km' },
  { from: 'Kigali', to: 'Rubavu', distance: '150 km' },
  { from: 'Kigali', to: 'Muhanga', distance: '50 km' },
  { from: 'Kigali', to: 'Rusizi', distance: '320 km' },
  { from: 'Kigali', to: 'Kayonza', distance: '85 km' },
  { from: 'Kigali', to: 'Rwamagana', distance: '60 km' },
  { from: 'Kigali', to: 'Gicumbi', distance: '65 km' },
  { from: 'Kigali', to: 'Nyanza', distance: '90 km' },
  { from: 'Kigali', to: 'Karongi', distance: '160 km' },
  { from: 'Kigali', to: 'Ngoma', distance: '100 km' },
  { from: 'Kigali', to: 'Nyamasheke', distance: '280 km' },
  { from: 'Kigali', to: 'Bugesera', distance: '40 km' },
  { from: 'Kigali', to: 'Nyagatare', distance: '230 km' }, // Repeated for sample purposes
];

const PopularRoutes = forwardRef<HTMLDivElement>((props, ref) => {
  // State to track whether all destinations are displayed
  const [showAll, setShowAll] = useState(false);

  // Toggle function to show more or fewer routes
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine the number of cards to show (12 if not expanded, all if expanded)
  const displayedRoutes = showAll ? routes : routes.slice(0, 10);

  return (
    <div className="h-auto min-h-96" ref={ref}>
      <div className=" lg:mx-24 md:mx-24 h-auto text-primary p-4">
        <h1 className="pt-16 text-2xl">Popular Routes</h1>
        <hr className="w-28 bg-primary p-1" />
        <p>Explore the routes we offer</p>

        <div className="flex flex-col lg:flex-row flex-wrap pt-5 gap-5">
          {/* Map over displayed routes */}
          {displayedRoutes.map((route, index) => (
            <div className="bg-third p-2 lg:w-44 items-center" key={index}>
              <span className="flex items-center gap-2">
                {route.from} <img src={arrow} alt="" className="h-3" /> {route.to} <br />
              </span>
              {route.distance}
            </div>
          ))}
        </div>

        {/* View All Destinations Button */}
        <div className="bg-third p-2 w-44 m-auto mt-3 cursor-pointer" onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'View All Destinations'}
        </div>
      </div>
    </div>
  );
});

export default PopularRoutes;
