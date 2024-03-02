import React from 'react'
import './CSS/LoginReg.css'

export const LoginRegister = () => {
  return (
    <div className='loginRegister'>
      <div className="loginReg-container">
        <h1>Sign Up</h1>
        <div className="loginReg-field">
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='email@gmail.com'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginReg-login">Already have an account? <span>Login</span></p>
        <div className="loginReg-agree">
          <input type="checkbox"  name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
export default LoginRegister