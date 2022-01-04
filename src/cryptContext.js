import React, { createContext, useContext , useState, useEffect } from 'react'

const Crypto = createContext()

function CryptContext( {children}) {

    const [currency , setCurrency] = useState('USD');
     const [symbol, setSymbol] = useState("$")


     useEffect(() => {
         if (currency === 'USD') setSymbol('$')
         else if (currency === "NGN") setSymbol('₦')
     }, [currency])
    return (
        <Crypto.Provider value = {{currency, symbol, setCurrency}}>
            {children}
        </Crypto.Provider>
    )
}

export default CryptContext

export  const CryptState = () => {
    return useContext(Crypto);
}