import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import React from "react";
export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{

const [cartItems,setcartItems] = useState({});

const addToCart =(itemId)=>{
  if(!cartItems[itemId]){
    setcartItems((prev)=>({...prev,[itemId] : 1}))
  }
  else{
    setcartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
  }
}
const removeFromCart = (itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

const getTotal = ()=>{
  let total = 0 ;
  for(const item in cartItems){
    if(cartItems[item]>0){
      let iteminfo = food_list.find((product) => product._id === item);
      total = total + iteminfo.price* cartItems[item] * 15;
    }  
  }
  return total ; 
}


  const contextValue ={
    food_list,
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,
    getTotal
  }
  
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider
