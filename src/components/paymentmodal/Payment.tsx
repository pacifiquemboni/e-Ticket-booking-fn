/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import transfer from '../../assets/images/transfer.png';

import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentMode: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(new Date());

  return (
    <>
      <div className="h-auto w-full md:w-11/12 bg-white rounded rounded-bl-2xl rounded-tr-2xl mx-1">
        <h1 className="pt-5 ml-8 text-primary text-1xl">Enter Mobile Money Number You need to use While Paying</h1>
        <hr className="w-32 rounded bg-primary p-1 ml-8" />
        <hr />

        <form
          action=""
          className="flex flex-col lg:flex-row items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8"
        >
          
           
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-primary w-72 lg:w-48 h-12 pl-6"
          />
          
         
        <Link to="" className="bg-primary text-white w-72 lg:w-2/12 h-12 mt-3 mb-3 lg:ml-2 flex justify-center items-center" >
      
        Pay
   
    </Link>
        </form>
      </div>
    </>
  );
};

export default PaymentMode;
