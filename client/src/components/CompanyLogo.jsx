import Logo from '../assets/Logo.svg'
import React from 'react'
import {Link} from 'react-router-dom'

function CompanyLogo() {
  return(
    <Link to='/'>
    <img className="w-[175px] h-[100px] ml-[40px] mt-6" src={Logo} alt='logo'/>
   </Link>
  )

  
}

export default CompanyLogo
