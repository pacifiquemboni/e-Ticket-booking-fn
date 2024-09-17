// UpdateModal.jsx
import React, { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const PaymentModal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="relative bg-white p-5 rounded-md w-full max-w-lg mx-auto md:w-1/3">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 bg-transparent border-none text-2xl cursor-pointer focus:outline-none"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PaymentModal;
