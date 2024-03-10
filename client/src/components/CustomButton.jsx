import React, { useState, useEffect } from 'react';

function CustomButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsCounting(!isCounting);
  };

  useEffect(() => {
    let interval = null;
    if (isCounting) {
      interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    } else if (!isCounting && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isCounting, counter]);

  return (
    <div>
      <button 
        className={`w-[140px] h-[120px] text-center justify-center border-4 rounded-[10px] border-[#0000FF] transition duration-300 hover:scale-110 text-[30px] text-[#0000FF] bg-white ${isHovered ? 'scale-110':''} transition-all shadow-[5px_5px_0px_#00F] hover:shadow-none`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        {isCounting ? counter : '150rs'}
      </button>
    </div>
  );
}

export default CustomButton;
