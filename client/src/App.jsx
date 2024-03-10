import React from 'react'
import Home from './pages/Home'
import CompanyLogo from './components/CompanyLogo'
import {Route, Routes, useLocation} from 'react-router-dom'
import AddSubscription from './pages/AddSubscription'
import ConnectWallet from './pages/ConnectWallet'
import MySubscription from './pages/MySubscription'
import Welcome from './pages/Welcome'


function App() {
  const location = useLocation();
     return (
      <>
      {location.pathname !== '/' && <CompanyLogo />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/add-subscription" element={<AddSubscription />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/my-subscription" element={<MySubscription />} />
      </Routes>
    </>
  );
}

export default App
