import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import MakeAuthorizedRequest from '../../auth/MakeAuthorizedRequest'
import LoginHeader from '../../components/LoginHeader/LoginHeader'
import LoginFooter from '../../components/LoginFooter/LoginFooter'
import Form from '../../components/Form/Form'
import './Login.css'
import SignIn from '../../auth/SignIn'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { dataJson, setDataJson } = useContext(AppContext)
  const { email, setEmail } = useContext(AppContext)
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    await SignIn(data.email, data.password).then((data) => {
      if (data.email) {
        setEmail(data.email)
        localStorage.setItem('ID_TOKEN_KEY', data.idToken)
        localStorage.setItem('REFRESH_TOKEN_KEY', data.refreshToken)
        const url = `https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/.json`
        const token = localStorage.getItem('ID_TOKEN_KEY')
        if (token) {
          MakeAuthorizedRequest('GET', url).then((res) => {
            navigate('/home')
            setDataJson(res)
          })
        }
      } else {
        alert(data.error.message)
      }
    })
  }

  return (
    <div className="wrapper">
    <div className='login'>
      <LoginHeader />
      <Form onSubmit={onSubmit} label={'Login'} />
      <LoginFooter />
    </div>
    </div>
  )
}

export default Login
