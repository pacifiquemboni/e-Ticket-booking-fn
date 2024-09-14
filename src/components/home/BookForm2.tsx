/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import transfer from '../../assets/images/transfer.png';
import CustomDatePickerInput from './CustomDatePickerInput';
import CustomTimePickerInput from './CustomTimePickerInput';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookForm2: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(new Date());

  return (
    <>
      <div className="h-auto w-full md:w-11/12 bg-white rounded rounded-bl-2xl rounded-tr-2xl mx-1">
        <h1 className="pt-5 ml-8 text-primary text-1xl">Book a Seat Now</h1>
        <hr className="w-32 rounded bg-primary p-1 ml-8" />
        <hr />

        <form
          action=""
          className="flex flex-col lg:flex-row items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Where From?"
              className="border border-primary w-72 lg:w-48   h-12 pl-6"
            />
            <img
              src={transfer}
              alt="transfer"
              className="absolute h-10 -left-5 lg:left-44 top-6 lg:top-1 z-10"
            />
            <div className='absolute md:top-4 right-1 lg:left-0 top-5'>
              <FaLocationArrow size={20} />
            </div>
            
          </div>
          <div className='relative'>
            <input
            type="text"
            placeholder="Where To?"
            className="border border-primary w-72 lg:w-48 h-12 pl-6"
          />
          <div className='absolute md:top-4  right-1  top-5'>
              <FaLocationArrow size={20} />
            </div>
          </div>
          

          <div className="w-72 lg:w-48  lg:ml-2 pt-3 lg:pt-0">
          <DatePicker
            selected={time}
            onChange={(date: Date | null) => setTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            customInput={<CustomTimePickerInput value={''} onClick={function (): void {
              throw new Error('Function not implemented.');
            } } />}
          />
          </div>
          <div className="w-72 lg:w-48  lg:ml-2 pt-3 lg:pt-0">
          <DatePicker
            selected={date}
            onChange={(date: Date | null) => setDate(date)}
            dateFormat="MM/dd/yyyy"
            customInput={<CustomDatePickerInput value={''} onClick={function (): void {
              throw new Error('Function not implemented.');
            } } />}
          />
        </div>
        <Link to="/availableBuses" className="bg-primary text-white w-72 lg:w-2/12 h-12 mt-3 mb-3 lg:ml-2 flex justify-center items-center" >
      
        Search Bus
   
    </Link>
        </form>
      </div>
    </>
  );
};

export default BookForm2;
