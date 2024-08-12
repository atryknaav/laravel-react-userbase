import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../context/ContextProvider';

const Signup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const pwdCnfRef = useRef<HTMLInputElement>(null);

  const {setUser, setToken} = useStateContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      password: pwdRef.current!.value,
      password_confirmation: pwdCnfRef.current!.value,
    }

    axiosClient.post('/signup', payload)
    .then(({data}) => {
      setUser(data.user);
      setToken(data.token);
    })
    .catch(err => {
      const res = err.response;
      if (res && res.status === 422){
        console.log(res.data.errors);
      }
    })
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={(e) => onSubmit(e)} action="">
          <h1 className='title'>Create a new account</h1>
          <input ref={nameRef} placeholder='Full Name'/>
          <input ref={emailRef} type="email" placeholder='Email'/>
          <input ref={pwdRef} type='password' placeholder='Password'/>
          <input ref={pwdCnfRef} type="password" placeholder='Repeat password'/>
          <button className='btn btn-block'>Signup</button>
          <p className='message'>
            Already Registered? <Link to='/login'>Create and account</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup