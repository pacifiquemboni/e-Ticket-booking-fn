import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

interface CustomDatePickerInputProps {
  value: string;
  onClick: () => void;
}

const CustomDatePickerInput: React.FC<CustomDatePickerInputProps> = ({ value, onClick }) => (
  <div className="relative">
    <input
      type="text"
      readOnly
      value={value}
      className="border border-primary w-72 lg:w-48 h-12 px-4 placeholder-text-gray-500"
      onClick={onClick}
      placeholder="Date to travel"
    />
    <button
      type="button"
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
      onClick={onClick}
    >
      <FaCalendarAlt size={20} />
    </button>
  </div>
);

export default CustomDatePickerInput;
