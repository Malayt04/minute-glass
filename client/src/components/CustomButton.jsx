import React, {useState} from 'react'

function CustomButton() {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <button className={`w-[140px] h-[120px] text-center justify-center border-4 rounded-[10px] border-[#0000FF] transition duration-300  hover:scale-110 text-[30px] text-[#0000FF] bg-white ${isHovered ? `scale-110`:''} transition-all shadow-[5px_5px_0px_#00F] hover:shadow-none`}  onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>{isHovered ? 'Go' : '150rs'}</button>
    </div>
  )
}

export default CustomButton

/*

import React, { useState } from 'react';

const CustomButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 ${
        isHovered ? 'text-yellow-400 scale-110' : ''
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovered ? 'New Text' : 'Original Text'}
    </button>
  );
};

export default CustomButton;
*/