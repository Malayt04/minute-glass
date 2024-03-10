import React, { useContext, createContext } from 'react';
import {useAddress, useMetamask, useContract, useContractWrite } from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({children})=>{
    const { contract } = useContract("0x80a1f5F7BbeF5Fbe20Bead1591f96f1897811beD");
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
