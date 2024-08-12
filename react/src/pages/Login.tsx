import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={(e) => onSubmit(e)} action="">
          <h1 className='title'>Login into your account</h1>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button className='btn btn-block'>Login</button>
          <p className='message'>
            Not Registered? <Link to='/signup'>Create and account</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login