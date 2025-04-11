 import React from 'react';
 import { IoMdClose } from "react-icons/io";

const Popup = ({ isOpen, onClose, children, widthClass }) => {
  if (!isOpen) return null;

   
  const handlePopupClick = (e) => {
    e.stopPropagation();   
  };

  return (
    <div className="popup-overlay " onClick={onClose}>
      <div 
        className={`popup-content ${widthClass}`} 
        onClick={handlePopupClick}  
      >
        
        <button onClick={onClose} className="absolute top-2 right-3   font-bold bg-gray-100 text-base p-2 rounded-full">
         <IoMdClose/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
