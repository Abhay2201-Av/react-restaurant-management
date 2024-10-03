import  { useRef, useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
// import { cart } from "../Data";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Login from "./Login";
import "../assets/css/full-screen.css";
import toast from "react-hot-toast";
import Profile from "../assets/images/user-profile.jpg"
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
// import Loader from "../assets/images/loader.gif"
import { useAuth } from "./context/Authcontext";

const Navbar = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ show,setShow ] = useState(false);
  // const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const [isFullScreen, setFullScreen] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  const foodItem = useSelector(state => state.cart.cart)

  console.log(isLoggedIn,'br');
  const loginHandler = () => {
    setShow(true);
    setFullScreen(true);
    setIsLoading(true);
    setTimeout(() =>{
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
      setIsLoading(false);
    },120000)
  };

  const logoutHandler = () => {
    setTimeout(()=> {
      localStorage.setItem('isLoggedIn', false);
      setIsLoggedIn(false)
      setIsLoading(false)
      setIsOpen(false);
      toast.success('Logout Successfully')
    },1000)
    
  }

  const closeLogin = () => {
    setShow(false);
    setFullScreen(false);
  };

  const userName = JSON.parse(localStorage.getItem("user"));

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
        <div className={`full-screen ${isFullScreen ? "active" : ""}`}></div>

      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
          {
          isLoggedIn ?<a href="#logout" id="login" onClick={logoutHandler} >Logout</a>:
           <a href="#login"  id="login" onClick={loginHandler}>Signup/Login</a>
           }
          
        </nav>

        { isLoggedIn? <button className="logbtn" onClick={toggleDropdown}> <FaUserCircle /></button>  : <></> }
        {isOpen &&
        <div className="userName-container">
        <div className="username">
        <img src={Profile} width={'50px'} alt="" /> 
        <h1 style={{fontSize:"15px",textAlign:"center"}}>{` ${userName.fullname}`}</h1>
        <p style={{fontSize:"11px",textAlign:"center", padding:"5px"}}>User Email :- {userName.email}</p>
        </div> </div>}
        <div className="log-icons">
        
        <div className="io-icons">
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
         <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
            style={{margin:"0px 0px 0px 80px"}}
          > <sup>{foodItem.length}</sup> <FaCartShopping /></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ><GiHamburgerMenu /></div>
        </div>
        </div>
        <div id="login-btn" >
        {isLoggedIn ? <button className="log-in" onClick={logoutHandler}><span> Logout </span></button> :
        <button className="log-in" onClick={loginHandler}><span> Signup/Login </span></button> }
        {show && <Login closeLogin={closeLogin}/>}
        </div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
          <input type="search" />
        </div>
        <div className="cart-items-container" ref={cartRef}>
          <CartItems />
        </div>
      </header>
    </>
  );
};

export default Navbar;
