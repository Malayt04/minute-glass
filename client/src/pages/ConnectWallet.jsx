import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useStateContext } from '../context';


function ConnectWallet() {
  const { connect, address } = useStateContext();
    const navigate = useNavigate()

    const handleClick = ()=>{
      if(address) navigate('/explore')
      else connect();
    }
  return (
    <div className="flex justify-center items-center h-full">
    <div>
      <h1 className='text-center text-[80px] font-bold text-[#00F]'>connect wallet</h1>
      <div className='w-[602px] h-[493px] border border-[#00F] rounded-[15px] flex flex-col justify-center items-center mt-[132px]'>
        <div className="flex flex-col justify-center items-center mt-[185px]">
          <button onClick={handleClick} className='w-[537px] h-[76px] bg-[#00F] rounded-[15px] text-center text-white text-[40px] font-semibold m-5'> {address ? 'Explore' : 'Connect'} </button>
        </div>
        <div className="mt-auto mb-10">
          <a href="https://metamask.io/" target='_blank' className='text-[#00FF] underline text-[20px]'>Don't have a wallet</a>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default ConnectWallet
