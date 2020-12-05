import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="login-container">
      <h1 className="welcome">Welcome to The Garage!</h1>
    <form className="login-form" onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h3 className="login">Login</h3>
      <label>Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
        <button className="basic-button">Login</button>
        <Link to='/register'><button className="basic-button">Register</button></Link>
      </form>
    </div>
  );
}

export default Login;