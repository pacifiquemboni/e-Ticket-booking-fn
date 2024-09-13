import React from 'react';
import { FaClock } from 'react-icons/fa';

interface CustomTimePickerInputProps {
  value: string;
  onClick: () => void;
}

const CustomTimePickerInput: React.FC<CustomTimePickerInputProps> = ({ value, onClick }) => (
  <div className="relative">
    <input
      type="text"
      readOnly
      value={value}
      className="border border-primary w-72 lg:w-48 h-12 px-4 placeholder-text-gray-500"
      onClick={onClick}
      placeholder="Time to travel"
    />
    <button
      type="button"
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
      onClick={onClick}
    >
      <FaClock size={20} />
    </button>
  </div>
);

export default CustomTimePickerInput;
