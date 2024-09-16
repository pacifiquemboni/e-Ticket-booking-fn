import React, { useEffect, useState } from 'react';
import { FaLocationArrow, FaClock, FaCalendarAlt } from 'react-icons/fa';
// Replace these imports with your actual image imports or URLs
import bgimage from '../../assets/images/avail.png';
import bgimage1 from '../../assets/images/homebg.png';

import bus from '../../assets/images/bus.png';
import arrow from '../../assets/images/Arrow.png';
import bookNow from '../../assets/images/bookNow.png';
import arrowLeft from '../../assets/images/ArrowLeft.svg';
import arrowRight from '../../assets/images/ArrowRight.svg';
import { Oval } from 'react-loader-spinner';
import logo from '../../assets/images/logo.png';
import UpdateModal from '../Updatemodal/updatemodal';
import BookForm2 from '../home/BookForm2';
import UpdateBookForm2 from '../home/updateBookForm2';
import steer from '../../assets/images/steer.png';
import staire from '../../assets/images/staire.png';
import PassengerInfoModel from '../passengermodal/passengermodal';
import PassengerInfo from '../passengermodal/PassengerInfo';
import PaymentModal from '../paymentmodal/paymentmodal';
import PaymentMode from '../paymentmodal/Payment';

const SeatPlan: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [passengerModel, setPassengerModel] = useState(false)
  const [isPaymentModal, setPaymentModal] = useState(false)
  const togglePaymenyModal = ()=>{
    setPaymentModal(true)
  }
  const togglePassengerModel =()=>{
    setPassengerModel(true)
  }
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setPassengerModel(false)
    setPaymentModal(false);

  };
  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second delay to simulate loading
  }, []);
  // Mock car data array

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
        <p className="text-2xl">Select Number Of Seats</p>
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
            ></UpdateModal>
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
          <div
            className="h-auto"
            style={{
              backgroundImage: `url(${bgimage1})`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="mx-6 lg:mx-24 flex flex-col gap-3 ">
              <div className="flex justify-between mt-10">
                {/* seat map start */}
                {passengerModel &&(
                  <div>
                    <PassengerInfoModel children={<PassengerInfo />} onClose={closeModal } />
                  </div>
                )}
                <div className="w-full md:w-9/12 lg:w-2/5 bg-primary h-96">
                  <div className="w-full flex justify-between">
                    <img src={steer} alt="" />
                    <img src={staire} alt="" />
                  </div>
                  <div className='flex justify-between p-1'>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm border' onClick={togglePassengerModel}> s-03</div>
                      <div className='w-16 md:w-24 h-10 bg-white text-center p-1 rounded-sm  border'> s-02</div>
                    </div>
                    <div className='flex '>
                      <div className='w-16 md:w-24'> </div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-01</div>
                    </div>
                  </div>
                  <div className='flex justify-between p-1'>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-07</div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-06</div>
                    </div>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'>s-05 </div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-04</div>
                    </div>
                  </div>
                  <div className='flex justify-between p-1'>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-11</div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-10</div>
                    </div>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'>s-09 </div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-08</div>
                    </div>
                  </div>
                  <div className='flex justify-between p-1'>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-15</div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-14</div>
                    </div>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-13</div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-12</div>
                    </div>
                  </div>
                  <div className='flex justify-between p-1'>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-19</div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-18</div>
                    </div>
                    <div className='flex gap-1'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-17</div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-16</div>
                    </div>
                  </div>
                  <div className='flex justify-between p-1'>
                    <div className='flex'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-24</div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-23</div>
                    </div>
                    <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-22</div>
                    <div className='flex'>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-21</div>
                      <div className='w-16 md:w-24 bg-white text-center p-1 rounded-sm  border'> s-20</div>
                    </div>
                  </div>
                </div>
                <img src={bus} alt="" className=" hidden lg:block h-96" />
              </div>
              <div className="bg-primary rounded-xl mb-3 p-3">
                <div className=" ml-8 text-white">
                  <p>Seats:</p>
                  <p>Total Seats:</p>
                  <p>Total Fare:</p>
                  <button onClick={togglePaymenyModal}  className='text-primary bg-white p-1 w-full lg:w-2/5 rounded-xl'>Proceed to Pay</button>
                </div>
              </div>
              {isPaymentModal && (
                <div>
                  <PaymentModal children={<PaymentMode />} onClose={closeModal}/>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SeatPlan;
