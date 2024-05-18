import React, { createContext, useState } from "react";
import all_product from "../Component/Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultValue = () => {
    let cart = {};
    for (let index = 0; index <=all_product.length; index++) {
      cart[index] = 0;
    }
    return cart;
  };

const ShopContextProvider = (props) => {
  
  const [cartItem,setCartItem] =useState(getDefaultValue());

  const addToCart=(itemId)=>{
    
      setCartItem((prev)=>(
        {...prev,[itemId]:prev[itemId]+1}
      ))


      console.log(cartItem);
  }
  const removeFromCart=(itemId)=>{
    console.log("rem");
    setCartItem((prev)=>(
      {...prev,[itemId]:prev[itemId]-1}
    ))
}
const getTotalCartItem=()=>{
  let totalItem=0;
  for(const item in cartItem){
    if(cartItem[item]>0){
      totalItem+=1;
    }
  }
  return totalItem;

}
const getTotalCartAmount =()=>{
  console.log("amount");
  let totalAmount =0;
  for(const item in cartItem){
    console.log("q"+item);
    if(cartItem[item]>0){
      console.log("check");
      let itemInfo =all_product.find((product)=>product.id===Number(item))
      totalAmount+=itemInfo.new_price * cartItem[item]
    }
    
  }
  return totalAmount;
}
  
const contextValue = { all_product,cartItem,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItem};   


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
