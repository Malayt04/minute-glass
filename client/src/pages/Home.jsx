import React from 'react';
import HomeBackground from '../assets/HomeBackground.svg';
import Organisation from '../components/Organisation';
import CompanyLogo from '../components/CompanyLogo';
import Wait from '../components/Wait';

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{
      backgroundImage: `url(${HomeBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh"
    }}>
      <CompanyLogo />
      <Wait/>
      <h1 className='text-[80px] text-[#00F] font-semibold text-center'>explore</h1>
      <div className='flex justify-center items-center'>
        <div>
          <Organisation />
        </div>
      </div>
    </div>
  );
}

export default Home;
