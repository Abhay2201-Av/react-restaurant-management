import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

function Registration() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const [errors, setErrors] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };
    
        // Validate fullname
        if (!formData.fullname.trim()) {
          newErrors.fullname = 'fullname is required';
          isValid = false;
        } else {
          newErrors.fullname = '';
        }
    
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
        } else if (formData.password.trim().length < 6) {
          newErrors.password = 'Password must be at least 6 characters long';
          isValid = false;
        } else {
          newErrors.password = '';
        }
    
        // Validate confirm password
        if (!formData.confirmPassword.trim()) {
          newErrors.confirmPassword = 'Please confirm password';
          isValid = false;
        } else if (formData.confirmPassword.trim() !== formData.password.trim()) {
          newErrors.confirmPassword = 'Passwords do not match';
          isValid = false;
        } else {
          newErrors.confirmPassword = '';
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(e)) {
            e.preventDefault();
          // Store user data in local storage
          localStorage.setItem('user', JSON.stringify(formData));
          axios.post("http://localhost:3000/user-details", formData)
          .then(()=> toast.success('Registration successful!'));
          setFormData({
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
        }
      };
  return (
    <div className="reg">
              <form className='formreg' onSubmit={handleSubmit}>
                <label htmlFor="">Full name</label>
                {errors.fullname && <div className="error">{errors.fullname}</div>}
                <input type="text" name='fullname' placeholder='Enter your full name' style={{ padding: "10px" }} value={formData.fullname}
                 onChange={handleChange} /> <br />
                <label htmlFor="">Email</label>
                {errors.email && <div className="error">{errors.email}</div>}
                <input type="email" name='email' placeholder='Enter your email' style={{ padding: "10px" }} value={formData.email}
            onChange={handleChange} /> <br />
                <label htmlFor="">Password</label>
                {errors.password && <div className="error">{errors.password}</div>}
                <input type="password" name='password' placeholder='Enter your password' style={{ padding: "10px" }} value={formData.password}
            onChange={handleChange} /> <br />
                <label htmlFor="">Confirm Password</label>
                {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                <input type="password" name='confirmPassword' placeholder='Enter your confirm password' style={{ padding: "10px" }} value={formData.confirmPassword}
            onChange={handleChange} /> <br />
                <button type='submit'>Signup</button>
              </form>
    </div>
  )
}

export default Registration