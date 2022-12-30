import React from 'react'
import LoginHeader from'../../components/LoginHeader/LoginHeader'
import LoginFooter from'../../components/LoginFooter/LoginFooter'
import Form from'../../components/Form/Form'
import './Login.css'
import SignIn from '../../auth/SignIn'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (data) => {
   SignIn(data.email, data.password)
   navigate("/home");
  }
  return (
    <div className='login'>
      <LoginHeader/>
      <Form onSubmit={onSubmit}/>
      <LoginFooter/>
    </div>
  )
}

export default Login