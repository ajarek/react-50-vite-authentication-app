import React from 'react'
import { useNavigate } from "react-router-dom";
import RegisterHeader from '../../components/RegisterHeader/RegisterHeader'
import RegisterFooter from '../../components/RegisterFooter/RegisterFooter'
import Form from'../../components/Form/Form'
import './Register.css'
import SignUp from '../../auth/SignUp'
const Register = () => {
  const navigate = useNavigate();
  const onSubmit = (data) => {
   SignUp(data.email, data.password)
   navigate("/");
  }
  return (
    <div className="wrapper">
    <div className='register'>
      <RegisterHeader/>
      <Form onSubmit={onSubmit} label={'Start coding now '}/>
      <RegisterFooter/>
    </div>
    </div>
  )
}

export default Register