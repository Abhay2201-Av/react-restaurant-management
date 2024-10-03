import React, { useState } from 'react';
import "../assets/css/billform.css";
import { RiCloseFill } from "react-icons/ri";
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51OtOPBSJsiNWtH9ERYzNcI9ayoZ2bRz0GMMaz3XlCqvGOI7y1AiomTOl8Bc35aeMTjKEWk7Ug01QezRMuQSlnopi00GbBmMqCR');

function BillingForm(props) {
    const [ checkData,setCheckData ] = useState({
        fullname:'',
        email:'',
        address:'',
        city:'',
        nameoncard:'',
        creditcardnumber:'', 
        expmonth:'',
        expyear:'',
        cvv:''
      })
    
    
      const handleClick = async (event) => {
        console.log(event)
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1PIupASJsiNWtH9EAGceZE7Z', 
            quantity: 1,
          }],
          mode: 'payment',
          successUrl: 'http://localhost:5173/',
          cancelUrl: 'https://example.com/cancel',
        })};
    
        const handleSubmit = (e) => {
            // e.preventDefault();
            if (checkData ) {
                // e.preventDefault();
                axios.post("http://localhost:3000/bill-user", checkData)
            .catch(err => console.log(err,"Error"))
            .then(res => console.log(res.data,"data"))
            setCheckData({
             fullname:'',
             email:'',
             address:'',
             city:'',
             nameoncard:'',
             creditcardnumber:'', 
             expmonth:'',
             expyear:'',
             cvv:''
            })
            }
            
        };
  return (
    <>
    <div id="container">

<form action="" className='form' onSubmit={(e)=>{ e.preventDefault(); handleSubmit()}}>

    <div class="row">

        <div class="col">
           
            <h3 class="title" >billing address</h3>
            
            <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="enter your full name" onChange={(e)=> setCheckData({...checkData, fullname: e.target.value})} />
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="enter your email" onChange={(e)=> setCheckData({...checkData, email: e.target.value})} />
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" placeholder="enter your address"  onChange={(e)=> setCheckData({...checkData, address: e.target.value})}/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="enter your city name" onChange={(e)=> setCheckData({...checkData, city: e.target.value})}/>
            </div>
        </div>

        <div class="col">
        <div className='header-form' style={{display:"flex",flexDirection:"column",}}>
        <button style={{ fontSize: "27px", display:"flex", alignItems:"flex-end", justifyContent:"flex-end", backgroundColor:"transparent", cursor: "pointer" }}
        onClick={props.closeBill}>
            <RiCloseFill />
          </button>
            <div class="inputBox" style={{margin:"20px 0px 0px 0px"}}>
                <span>name on card :</span>
                <input type="text" placeholder="enter your name on card" onChange={(e)=> setCheckData({...checkData, nameoncard: e.target.value})} />
            </div></div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="enter your credit card number"  onChange={(e)=> setCheckData({...checkData, creditcardno: e.target.value})} />
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="enter credit card exp month" onChange={(e)=> setCheckData({...checkData, expmonth: e.target.value})} />
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="enter credit card exp year" onChange={(e)=> setCheckData({...checkData, expyear: e.target.value})} />
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="enter credit card cvv" onChange={(e)=> setCheckData({...checkData, cvv: e.target.value})} />
                </div>
            </div>

        </div>

    </div>

    <input type="submit" value="proceed to checkout" class="submit-btn"  onClick={handleClick} />

</form>

</div>
    </>
  )
}

export default BillingForm