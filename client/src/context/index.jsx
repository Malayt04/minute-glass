import React, { useContext, createContext } from 'react';
import { useContract, useContractWrite } from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({children})=>{
    const { contract } = useContract("0x80a1f5F7BbeF5Fbe20Bead1591f96f1897811beD");


    return (
        <StateContext.Provider>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>useContext(StateContext)
