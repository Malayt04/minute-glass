import React from 'react'
import ImageComponent from './ImageComponent'
import CustomButton from './CustomButton'

function SubscriptionCard() {
  return (
    <div className='w-[380px]  mt-[138px] ml-[101px] mb-[20px]'>
      <ImageComponent/>
      <div>
      <h1 className='text-[#0000FF]  text-[60px] italic font-black '><span>Website </span>Name</h1>
      <br></br>
      <p  className='text-[#0000FF] text-[20px] font-semibold'>Lorem ipsum dolor sit amet consectetur. Vitae consectetur scelerisque vel fames magna at sem nunc. Ac vitae a egestas blandit dui enim. Dolor in est egestas dictum elit massa diam lectus nisl. Duis vitae nulla sit.</p>

      </div>
      <br></br>
      <div className="flex justify-center">
  <CustomButton />
</div>
      
    </div>
  )
}

export default SubscriptionCard
