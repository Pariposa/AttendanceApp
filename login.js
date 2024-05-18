import React from 'react';
import Image_Url from './logo.svg';
import './login.scss';

const Login = () => {
return (
<div className='login-container'>
<div className='login-content'>
<img src={Image_Url} />
<h2>Attendance</h2>
<div className='sign-in-container'>
<p className='signin-text'>Sign in</p>
<form className='signin-form-input'>
<input type='email' placeholder='Email' />
<input type='password' placeholder='Password' />
</form>
<button className='login-btn'>Login</button>
</div>
<div className='forget-pass'>Forget Password?</div>
</div>
</div>
)
}

export default Login;