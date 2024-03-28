import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'

const FoodItem = ({id,name,price,description,image}) => {
  
const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='Food-Item'>
      <div className="Food-Item-Image-Container">
        <img className='Food-Item-Image' src={image} alt="" />        
        {!cartItems[id] ? 
          <img className='Add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add"/>
          : 
          <div className='Food-Item-Count'> 
            <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)}src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="Food-Item-Info">
        <div className="Food_Item-Name-Rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="Food-Item-Description">
          {description}
        </p>
        <p className="Food-Item-Price">
          ₹{price*15}
        </p>
      </div>
      
    </div>
  )
}

export default FoodItem
