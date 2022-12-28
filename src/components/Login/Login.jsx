import React from 'react'
import LoginHeader from'../LoginHeader/LoginHeader'
import LoginFooter from'../LoginFooter/LoginFooter'
import Form from'../Form/Form'
import './Login.css'
const Login = () => {
  return (
    <div className='login'>
      <LoginHeader/>
      <Form/>
      <LoginFooter/>
    </div>
  )
}

export default Login