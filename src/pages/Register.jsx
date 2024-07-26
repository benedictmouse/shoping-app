import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  return (
    <section className='login_container'>
      <form className='login_form'>
        <h1>Sign Up</h1>
        <label className='form-label'>Username</label>
        <input className='form-input' type='text' placeholder='Username' />
        <label className='form-label'>Email</label>
        <input className='form-input' type='email' placeholder='Email' />
        <label className='form-label'>Password</label>
        <input className='form-input' type='password' placeholder='Password' />
        <label className='form-label'>Confirm Password</label>
        <input className='form-input' type='password' placeholder='Confirm Password' />
        <button className='form-button'>Log In</button>
        <p className='signup-prompt'>
          y have an account? <Link to='/login' className='signup-link'>Sign in</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
