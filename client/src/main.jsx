import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { metamaskWallet,ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
import { StateContextProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <ThirdwebProvider supportedWallets={[
      metamaskWallet({
        recommended: true,
      })
    ]}
    
    clientId="49616d7cae9b400aeb1f88d65f575332"
    activeChain="mumbai"
    > 
      <Router>
        <StateContextProvider>
        <App />
        </StateContextProvider>
        </Router>
    </ThirdwebProvider> 
  )