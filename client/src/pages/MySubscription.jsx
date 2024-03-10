import React from 'react'
import SubscriptionCard from '../components/SubscriptionCard'

function MySubscription() {
  return (
    <div>
      <h1 className='text-center text-[80px] font-bold text-[#00F]'>my subscription</h1>
      <div className='flex justify-center'>
      <SubscriptionCard/>
      <SubscriptionCard/>
      <SubscriptionCard/>

      </div>
     
    </div>
  )
}

export default MySubscription
