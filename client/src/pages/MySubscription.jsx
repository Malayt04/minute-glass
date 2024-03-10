import React from 'react'
import SubscriptionCard from '../components/SubscriptionCard'
import SubBtn from '../assets/SubBtn.svg'
import {Link} from 'react-router-dom'


function MySubscription() {
  return (
    <div>
      <h1 className='text-center text-[80px] font-bold text-[#00F]'>my subscription</h1>
      <div className='flex justify-center items-center h-screen'>
    <div className='flex justify-center'>
        <div className='flex justify-center'>
            <SubscriptionCard />
            <SubscriptionCard />
            <SubscriptionCard />
        </div>
        <Link to='/add-subscription'>
            <img src={SubBtn} alt='add-subscription' />
        </Link>
    </div>
</div>

    
</div>
  )
}

export default MySubscription
