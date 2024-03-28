import React ,{ useContext }from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../context/storeContext'


const PlaceOrder = () => {
  const {getTotal} = useContext(StoreContext)
    return (
    <form className='Placeorder'>
      <div className="Placeorder-Left">
        <p className="Title">Delivery Information</p>
        <div className="Multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="Multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="Multi-fields">
          <input type="text" placeholder='ZipCode'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="Placeorder-Right">
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
              <p>₹{getTotal()===0 ? 0: 2}</p>
            </div>
            <hr />
            <div className="Cart-Total-Details">
              <b>Total</b>
              <b>₹{getTotal()===0 ?0:getTotal() + 2}</b>
            </div>        
          </div>
          <button >Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
