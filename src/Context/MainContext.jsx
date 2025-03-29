import React, { createContext, useEffect, useState } from 'react'

import toast, { Toaster } from 'react-hot-toast';


 const Context=createContext();

function MainContext({children}) {


  const oldCartData=JSON.parse(localStorage.getItem("CART")) ?? [];

  const oldLoginData=localStorage.getItem('token') ?? '';



   const [cart,setCart]=useState(oldCartData)

   const [userData,setUserdata]=useState(oldLoginData);  //or localstorage me save karna padega kyuki login ke baad 


   useEffect(
    ()=>{
      localStorage.setItem("CART",JSON.stringify(cart))
    },[cart]
   );


   useEffect(
    ()=> {
      localStorage.setItem("token",userData)
    },[userData]
   );


  return (
   <>
     <Context.Provider value={{cart,setCart,toast,userData,setUserdata}}>
         {children}
     </Context.Provider>
     <Toaster
      />
      </>
   
  )
}

export default MainContext


export {Context}