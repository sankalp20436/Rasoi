import React,{ useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/storeContext'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotal} = useContext(StoreContext)
  const navigate =useNavigate();
  return (
    <div className='Cart'>
      <div className="Cart-Items">
        <div className="Cart-Items-Title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <div>
              <div className='Cart-Items-Title Cart-Items-Item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹ {item.price * 15}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹ {item.price * cartItems[item._id] * 15}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>  
      
      <div className="Cart-Bottom">
        <div className="Cart-Total">
          <h2>Cart Total</h2>
          <div>
            <div className="Cart-Total-Details">
              <p>SubTotal</p>
              <p>₹{getTotal()}</p>
            </div>
            <hr />
            <div className="Cart-Total-Details">
              <p>Delivery Fee</p>
              <p>₹{getTotal()===0 ? 0:2}</p>
            </div>
            <hr />
            <div className="Cart-Total-Details">
              <b>Total</b>
              <b>₹{getTotal()===0? 0 : getTotal() + 2}</b>
            </div>        
          </div>
          <button onClick={()=>{navigate('/placeorder')}}>Proceed to checkout</button>
        </div>
        <div className="Cart-Promocode">
          <div>
            <p>If you have a promo code enter it here</p>
            <div className='Cart-Promocode-input'>
              <input type="text" placeholder='Enter promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Cart
