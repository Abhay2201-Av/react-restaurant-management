import React, { useState } from 'react';
import { RiCloseFill } from "react-icons/ri";
import "../assets/css/form.css";
import Profilelogin from "../assets/images/login.gif"
import Registration from './Registration';
import toast from 'react-hot-toast';
import { useAuth } from './context/Authcontext';

function Login(props) {
  const [showLogin, setShowLogin] = useState(true);
  const {isLoggedIn, setIsLoggedIn} = useAuth();

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === formData.email && user.password === formData.password) {
          setIsLoggedIn(true);
          toast.success('Login successful!');
          localStorage.setItem("isLoggedIn",true)
          setFormData({
            email: '',
            password: '',
          });
          setTimeout(()=>{
            props.closeLogin()
          },1000)
        } else {
          toast('Invalid email or password',{icon: '⚠️'});
        }
      } else {
        toast('No user found',{icon: '⚠️'});
      }
    }};

    

  return (
     <div className='container'>
      <div className='login-container'>
      
        <div className='loginform'>
        
          <button
            className='closelogreg'
            onClick={props.closeLogin}
          >
            <RiCloseFill />
          </button>
          <div className="log-reg">
          <div className="log-img">
          <img src={Profilelogin} alt="" width={"350rem"} />
        </div>
          <div className='login-form'>
            <div className="radio-input">
              <label>
                <input
                  type="radio"
                  name="value-radio"
                  value="login"
                  checked={showLogin}
                  onChange={toggleForm}
                />
                <span>Login</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="value-radio"
                  value="registration"
                  checked={!showLogin}
                  onChange={toggleForm}
                />
                <span>Signup</span>
              </label>
            </div>

            {showLogin ? (
              <form  className='formlogin' onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                {errors.email && <div className="error">{errors.email}</div>}
                <input type="email" name='email' placeholder='Enter your email' style={{ padding: "10px" }}  value={formData.email}
            onChange={handleChange} /> <br />
                <label htmlFor="">Password</label>
                {errors.email && <div className="error">{errors.email}</div>}
                <input type="password" name='password' placeholder='Enter your password' style={{ padding: "10px" }}  value={formData.password}
            onChange={handleChange}/> <br />
                <button type='submit'>Login</button>
              </form>
            ) : (
              <Registration />
            )}
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
