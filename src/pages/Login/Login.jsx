import React from 'react'
import LoginHeader from'../../components/LoginHeader/LoginHeader'
import LoginFooter from'../../components/LoginFooter/LoginFooter'
import Form from'../../components/Form/Form'
import './Login.css'

//Web API Key: AIzaSyCMKT92lcL-zfLubUcdoraW87_xm8-JDP4

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