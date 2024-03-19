import React, { useState } from 'react'
import './CSS/LoginReg.css'

export const LoginRegister = () => {

  const [state, setState] = useState("Login")
  const [formData,setFormData] = useState({
    name: '',
    password: '',
    email: ''
  })
  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    let responseData;
    
    await fetch('http://localhost:4000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response)=> response.json())
    .then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem("auth-token",responseData.token)
      window.location.replace('/')
    }else{
      alert(responseData.message)
    }
    


  }

  const register = async () => {
    let responseData;
    
    await fetch('http://localhost:4000/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response)=> response.json())
    .then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem("auth-token",responseData.token)
      window.location.replace('/')
    }else{
      alert(responseData.message)
    }
    
  }

  return (
    <div className='loginRegister'>
      <div className="loginReg-container">
        <h1>{state}</h1>
        <div className="loginReg-field">
          {state === 'Register'?
            <input name='name' value={formData.name} onChange={changeHandler} type="text" placeholder='Full Name' />
            : ""
          }
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='email@gmail.com'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{
          {state === 'Login'?
            login()
            : register()}
        }}>Continue</button>
        {state === 'Login'?
          <p className="loginReg-login">Create an account? <span onClick={()=>{setState("Register")}}>Register</span></p>
        :
          <p className="loginReg-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login</span></p>
        }
        <div className="loginReg-agree">
          <input type="checkbox"  name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
export default LoginRegister