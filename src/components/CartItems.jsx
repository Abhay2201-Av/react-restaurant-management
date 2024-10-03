import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'; 
import { removeFromCart } from './redux/CartSlice';
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import "../assets/css/full-screen.css";
import BillingForm from './BillingForm';

function CartItems(isLoggedIn) {
    const [ showBill, setShowBill ] = useState(false);
    const [isFullScreen, setFullScreen] = useState(false); 
    const cartItem = useSelector(state => state.cart.cart)

    const chekOutHandler = () => {
      setShowBill(true)
      setFullScreen(true)
    }
    console.log(showBill,"heloo");

    const closeBill = () => {
      setShowBill(false)
      setFullScreen(false)
    }

    const dispatch = useDispatch()


  return (
    <div>
    <div className={`full-screen ${isFullScreen ? "active" : ""}`}></div>
        <div>
        {cartItem.map((item) => (
            <div className="cart-item" key={item.id}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">₹{item.price}/- <div className="remove-cart" onClick={() => {dispatch(removeFromCart(item.id)); toast('item removed') }}> <MdDelete style={{color:"red", marginLeft:'10px', fontSize:"23px" }} /></div> </div>
              </div>
            </div>
          ))}
          <a className="btn" onClick={chekOutHandler}>
            checkout now
          </a>
          {/* <ProtectedRoute Component={showBill && <BillingForm closeBill={closeBill} />} /> */}
         {showBill && <BillingForm closeBill={closeBill} />}
         {/* <BillingForm /> */}
         {/* <Routes><Route path="/checkout" element={<ProtectedRoute  Component={showBill && <BillingForm closeBill={closeBill} />} />} /></Routes> */}
         
        </div>
    </div>
  );
}

export default CartItems;
