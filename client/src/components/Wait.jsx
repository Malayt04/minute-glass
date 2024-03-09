import HourGlass from '../assets/HourGlass.svg'
import React from 'react'

function Wait({classes}) {
  return (
    <img
      src={HourGlass}
      alt='hourglass'
      className={classes}
      style={{ transition: 'transform 0.3s ease-in-out', maxWidth: '100%'}}
      onMouseOver={(e) => e.target.style.transform = 'rotate(-30deg)'}
      onMouseOut={(e) => e.target.style.transform = 'rotate(0deg)'}
    />
  );
}

export default Wait;
