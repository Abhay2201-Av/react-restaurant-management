import  { useEffect, useState } from "react";
// import { menu } from "../Data";
import { GoStarFill } from "react-icons/go";
import axios from "axios";
import { addToCart } from "./redux/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Menu = () => {

    const [ foodItem,setFoodItem ] = useState([]);

    const dispatch = useDispatch();
    useEffect(()=>{
      axios.get("http://localhost:3000/product")
      .then((res) => setFoodItem(res.data))
    },[])


  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {foodItem.map((item) => (
            <div className="box" key={item.id} >
              <img src={item.img} style={{backgroundColor:"#fff"}} alt="" />
              <h3>{item.name}</h3> 
              <p style={{fontSize:"20px", padding:"2px"}}><GoStarFill style={{color:"#ffd60a"}} /> <span style={{color:"#fff"}}> {item.rating} </span></p>
              <div className="price">
              ₹{item.price} <span>300</span>
              </div>
              <button  className="btn" onClick={() => {dispatch(addToCart(item)); toast.success('item added') }}>
                add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
