/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import transfer from '../../assets/images/transfer.png';

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
              className="absolute h-10 -left-5 lg:left-44 top-6 lg:top-1"
            />
          </div>
          <input
            type="text"
            placeholder="Where To?"
            className="border border-primary w-72 lg:w-48 h-12 pl-6"
          />

          <div className="w-72 lg:w-48  lg:ml-2 pt-3 lg:pt-0">
            <DatePicker
              selected={time}
              onChange={(date: Date | null) => setTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="border border-primary w-72 lg:w-48 h-12 px-4"
              placeholderText="Time to travel"
            />
          </div>
          <div className="w-72 lg:w-48 lg:ml-2 pt-3 lg:pt-0">
            <DatePicker
              selected={date}
              onChange={(date: Date | null) => setDate(date)}
              dateFormat="MM/dd/yyyy"
              className="border border-primary w-72 lg:w-48 h-12 px-4"
              placeholderText="Date to travel"
            />
          </div>
          <button className="bg-primary text-white w-72 lg:w-2/12 h-12 mt-3 mb-3 lg:ml-2">
            Search Bus
          </button>
        </form>
      </div>
    </>
  );
};

export default BookForm2;
