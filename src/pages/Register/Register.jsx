import React from 'react'
import RegisterHeader from '../../components/RegisterHeader/RegisterHeader'
import RegisterFooter from '../../components/RegisterFooter/RegisterFooter'
import Form from'../../components/Form/Form'
import './Register.css'

const Register = () => {
  return (
    <div className='register'>
      <RegisterHeader/>
      <Form/>
      <RegisterFooter/>
    </div>
  )
}

export default Register