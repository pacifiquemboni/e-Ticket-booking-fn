import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import transfer from '../../assets/images/transfer.png';
import CustomDatePickerInput from './CustomDatePickerInput';
import CustomTimePickerInput from './CustomTimePickerInput';

const BookForm: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(new Date());

  return (
    <div className="h-auto w-96 bg-white">
      <h1 className="pt-10 ml-8 text-primary text-1xl">Book a Seat Now</h1>
      <hr className="w-1/2 rounded bg-primary p-1 ml-6" />
      <hr />

      <form action="" className="flex flex-col items-center relative pt-10">
        <img
          src={transfer}
          alt="transfer"
          className="absolute left-6 top-16"
        />
        <input
          type="text"
          placeholder="Where From?"
          className="border border-primary w-72 h-12 pl-6"
        />
        <input
          type="text"
          placeholder="Where To?"
          className="border border-primary w-72 h-12 pl-6"
        />
        <div className="w-72 pt-3">
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
        <div className="w-72 pt-3">
          <DatePicker
            selected={date}
            onChange={(date: Date | null) => setDate(date)}
            dateFormat="MM/dd/yyyy"
            customInput={<CustomDatePickerInput value={''} onClick={function (): void {
              throw new Error('Function not implemented.');
            } } />}
          />
        </div>
        <button className="bg-primary text-white w-9/12 h-12 mt-3 mb-10">
          Search Bus
        </button>
      </form>
    </div>
  );
};

export default BookForm;
