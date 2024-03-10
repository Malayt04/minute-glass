import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';

const StateContext = createContext();

export const StateContextProvider = ({children})=>{
    const { contract } = useContract("0x328c2312fB35B18045C266dd1Ed132bbfb3E1a19");
    const {mutateAsync: createSubscription}=useContractWrite(contract,'createSubscription')
    const address =useAddress();
    const connect = useMetamask();
    const publishSubscription = async (form) =>{
        try {
            
        const data = await createSubscription({
            args:[
                address,
                form.websiteName,
                form.description ,
                form.url,
                form.price,
                form.uploadImage
            ]
        })
        console.log("Contract Success", data);
        } catch (error) {
            console.log(error)
        }
    }
   
    return (
        <StateContext.Provider
        value={{
            address,
            contract,
            connect,
            createSubscription:publishSubscription
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>useContext(StateContext)
