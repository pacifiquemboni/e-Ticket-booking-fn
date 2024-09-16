import React, { useEffect, useState } from 'react';
import { FaLocationArrow, FaClock, FaCalendarAlt } from 'react-icons/fa';
// Replace these imports with your actual image imports or URLs
import bgimage from '../../assets/images/avail.png';
import carimg from '../../assets/images/car.png';
import arrow from '../../assets/images/Arrow.png';
import bookNow from '../../assets/images/bookNow.png';
import arrowLeft from '../../assets/images/ArrowLeft.svg';
import arrowRight from '../../assets/images/ArrowRight.svg';
import { Oval } from 'react-loader-spinner';
import logo from '../../assets/images/logo.png';
import UpdateModal from '../Updatemodal/updatemodal';
import BookForm2 from '../home/BookForm2';
import UpdateBookForm2 from '../home/updateBookForm2';
import { Link } from 'react-router-dom';

const AvailableCars: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second delay to simulate loading
  }, []);
  // Mock car data array
  const carData = [
    {
      id: 1,
      startTime: '02:00 PM',
      endTime: '05:00 PM',
      duration: '3h 30Min',
      company: 'Yahoo Car',
      price: 4950,
      seatsLeft: 12,
    },
    {
      id: 2,
      startTime: '03:00 PM',
      endTime: '06:30 PM',
      duration: '3h 30Min',
      company: 'Alpha Car',
      price: 5000,
      seatsLeft: 10,
    },
    {
      id: 3,
      startTime: '04:00 PM',
      endTime: '07:30 PM',
      duration: '3h 30Min',
      company: 'Beta Car',
      price: 4800,
      seatsLeft: 8,
    },
    {
      id: 4,
      startTime: '05:00 PM',
      endTime: '08:30 PM',
      duration: '3h 30Min',
      company: 'Gamma Car',
      price: 5100,
      seatsLeft: 15,
    },
    {
      id: 5,
      startTime: '06:00 PM',
      endTime: '09:30 PM',
      duration: '3h 30Min',
      company: 'Delta Car',
      price: 4700,
      seatsLeft: 7,
    },
    {
      id: 6,
      startTime: '07:00 PM',
      endTime: '10:30 PM',
      duration: '3h 30Min',
      company: 'Epsilon Car',
      price: 5300,
      seatsLeft: 5,
    },
    {
      id: 7,
      startTime: '08:00 PM',
      endTime: '11:30 PM',
      duration: '3h 30Min',
      company: 'Zeta Car',
      price: 4900,
      seatsLeft: 4,
    },
    // Add more car objects if needed
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4; // Number of cars to display per page

  // Calculate the indexes for the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carData.slice(indexOfFirstCar, indexOfLastCar);

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < Math.ceil(carData.length / carsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="">
      {/* Header and Search Section */}
      <div
        className="h-24 w-full text-white text-center p-5"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <p className="text-2xl">Please Select a Bus</p>
        <p>Kigali-Rubavu</p>
      </div>

      {/* Search Info Section */}
      <div className="h-auto  w-full border">
        <div className="p-3 mx-10 gap-3 lg:mx-24 flex flex-wrap md:flex-row justify-between items-start lg:items-center">
          {/* Static search data */}
          {/* From */}
          <div>
            <p className="text-lm font-bold">Where From?</p>
            <div className="flex gap-1 items-center">
              <FaLocationArrow size={15} />
              <p className="text-primary">Kigali</p>
            </div>
          </div>
          {/* To */}
          <div>
            <p className="text-lm font-bold">Where To?</p>
            <div className="flex gap-1 items-center">
              <FaLocationArrow size={15} />
              <p className="text-primary">Rubavu</p>
            </div>
          </div>
          {/* Time */}
          <div>
            <p className="text-lm font-bold">Time To Travel</p>
            <div className="flex gap-1 items-center">
              <FaClock size={15} />
              <p className="text-primary">02:00 PM</p>
            </div>
          </div>
          {/* Date */}
          <div>
            <p className="text-lm font-bold">Date To Travel</p>
            <div className="flex gap-1 items-center">
              <FaCalendarAlt size={15} />
              <p className="text-primary">24-08-2024</p>
            </div>
          </div>
          {/* Search Button */}
          <div>
            <button
              onClick={openModal}
              className="border border-primary p-2 rounded-lg shadow-lg text-primary"
            >
              Search Again
            </button>
          </div>
          {modalOpen && (
            <UpdateModal
              onClose={closeModal}
              children={<UpdateBookForm2 />}
            >
              
            </UpdateModal>
          )}
        </div>
      </div>
      {isLoading ? (
        <div className="h-96 w-full flex flex-col justify-center items-center relative">
          <img src={logo} alt="Logo" className="mb-4 h-12 absolute" />
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          {/* Car List Section */}
          <div className=" mx-10 md:mx-24 mt-5">
            <p>Available Buses ({carData.length})</p>
            <div className="flex flex-col md:flex-wrap md:flex-row justify-between mt-5">
              {currentCars.map((car) => (
                <div key={car.id} className="w-56 mb-5">
                  <img src={carimg} alt="car" className="w-56" />
                  <div className="flex justify-between relative">
                    <div>
                      <p className="flex items-center gap-2 font-semibold">
                        <span>{car.startTime}</span>
                        <img src={arrow} alt="" className="h-3" />
                        <span>{car.endTime}</span>
                      </p>
                      <p>Duration {car.duration}</p>
                      <p>{car.company}</p>
                      <p>
                        <span className="font-semibold">{car.price}</span>{' '}
                        <span className="bg-forth rounded-2xl p-1 text-xs ml-3">
                          Rwf
                        </span>
                      </p>
                      <p className="text-red-500">{car.seatsLeft} seats left</p>
                    </div>
                    <Link to={'/selectseats'}>
                    <button className="bg-forth h-16 absolute bottom-0 right-0 flex flex-col items-center p-1 rounded-2xl">
                      <img src={bookNow} alt="" />
                      <p className="text-[#2FF62B] text-xs">Choose Seat</p>
                    </button>
                    </Link>
                    
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-3 mt-5">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="p-2 bg-gray-200 rounded disabled:opacity-50"
              >
                <img src={arrowLeft} alt="" />
              </button>
              <button
                onClick={handleNextPage}
                disabled={
                  currentPage === Math.ceil(carData.length / carsPerPage)
                }
                className="p-2 bg-gray-200 rounded disabled:opacity-50"
              >
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
        </>
      )}

      {/* loading section */}
    </div>
  );
};

export default AvailableCars;
