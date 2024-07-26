import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  return (
    <section className='login_container'>
      <form className='login_form'>
        <h1>Log In</h1>
        <label className='form-label'>Email</label>
        <input className='form-input' type='email' placeholder='Email' />
        <label className='form-label'>Password</label>
        <input className='form-input' type='password' placeholder='Password' />
        <button className='form-button'>Log In</button>
        <p className='signup-prompt'>
          Don't have an account? <Link to='/Register' className='signup-link'>Sign up</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
