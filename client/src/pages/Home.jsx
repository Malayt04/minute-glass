import React from 'react';
import HomeBackground from '../assets/HomeBackground.svg';
import Organisation from '../components/Organisation';
import CompanyLogo from '../components/CompanyLogo';
import Wait from '../components/Wait';

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{
     
      display:"flex"
    }}>
        <div>
        <CompanyLogo />
        <Wait classes="mt-[700px] ml-[150px]"/>
        </div>
     <div>
     <h1 className='text-[80px] text-[#00F] font-semibold text-center m-5'>explore</h1>
     <div className=''>
          <Organisation />
          <Organisation />
          <Organisation />
      </div>
     </div>
     
     <div>
     <Wait classes="mt-[700px] ml-[150px] mt-[30px]"/>
     <Wait classes="mt-[700px] ml-[150px]"/>
     </div>
     
      
    </div>
  );
}

export default Home;
