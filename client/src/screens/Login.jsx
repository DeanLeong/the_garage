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
    <div>
      <h1>Welcome to The Garage!</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h3>Login</h3>
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
      <Link to='/register'>Register</Link>
        
      <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;