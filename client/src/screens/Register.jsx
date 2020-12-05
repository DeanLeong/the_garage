import React from 'react';
import { useState } from 'react'
import './Register.css'

function Register(props) {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      img_url: "",
      password: ""
    })
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  
  return (
      <div className="register-container">
      <form className="register-form" onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}>
        <h3 className="register-title">Register</h3>
        <label>Username:
          <input
            placeholder="Username"
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Email:
          <input
            placeholder="email"
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Image Url:
         <input
            placeholder='Image URL'
            type='text'
            name='img_url'
            value={formData.img_url}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Password:
          <input
            placeholder="Password"
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      </div>
  );
}

export default Register;