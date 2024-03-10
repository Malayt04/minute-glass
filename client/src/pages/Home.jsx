import React from 'react';
import Organisation from '../components/Organisation';
import Wait from '../components/Wait';
import { ConnectWallet as WalletButton } from "@thirdweb-dev/react";

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{
     
      display:"flex"
    }}>
        <div>
        
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
     <Wait classes="mt-[200px] ml-[150px] mt-[30px]"/>
     <Wait classes="mt-[500px] ml-[150px]"/>
     </div>
     
      
    </div>
  );
}

export default Home;
