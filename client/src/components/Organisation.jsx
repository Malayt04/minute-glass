import React from 'react'
import ImageComponent from './ImageComponent'
import CustomButton from './CustomButton'

function Organisation() {
  return (
    <div className='flex border border-solid border-gray-400 m-5 w-30 w-[1129px] h-[300px]'>
        <div className='m-4'>
        <ImageComponent/>
        </div>
        
        
      
      <div className='m-4 mt-0 w-[600px]'>
      <h1 className='text-[#0000FF]  text-[60px] italic font-black'>Website Name</h1>
      <p  className='text-[#0000FF] text-[20px] font-semibold'>Lorem ipsum dolor sit amet consectetur. Vitae consectetur scelerisque vel fames magna at sem nunc. Ac vitae a egestas blandit dui enim. Dolor in est egestas dictum elit massa diam lectus nisl. Duis vitae nulla sit.</p>
      </div>
      <div className='items-center m-2 mt-12 flex'>
      <CustomButton/>
      </div>
      
     
    </div>
  )
}

export default Organisation
