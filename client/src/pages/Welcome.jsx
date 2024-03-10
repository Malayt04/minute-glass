import React from 'react'
import MainLogo from '../assets/MainLogo.svg'
import {Link} from 'react-router-dom'

function Welcome() {

  return (
    <div>
       <div className="flex justify-between items-center mt-[30px] mx-[20px]">
    <Link to="/my-subscription">
        <button className='w-[537px] h-[76px] bg-[#00F] rounded-[15px] text-center text-white text-[40px] font-semibold mr-0'>join</button>
    </Link>
    <Link to="/connect-wallet">
        <button className='w-[537px] h-[76px] bg-[#00F] rounded-[15px] text-center text-white text-[40px] font-semibold mr-0'>connect wallet</button>
    </Link>
</div>

   
     <div className="flex justify-center items-center h-full">
  <div className='mt-[325px]'>
    <img src={MainLogo} alt='logo' />
  </div>
</div>

    </div>
  )
}

export default Welcome
