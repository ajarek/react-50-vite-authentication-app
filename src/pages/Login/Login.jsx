import React, { useEffect, useState } from 'react'
import MakeAuthorizedRequest from '../../auth/MakeAuthorizedRequest'
import LoginHeader from '../../components/LoginHeader/LoginHeader'
import LoginFooter from '../../components/LoginFooter/LoginFooter'
import Form from '../../components/Form/Form'
import './Login.css'
import SignIn from '../../auth/SignIn'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [log, setLog] = useState(false)
  const navigate = useNavigate()
  const onSubmit = (data) => {
    SignIn(data.email, data.password).then((data) => {
      localStorage.setItem('ID_TOKEN_KEY', data.idToken)
      localStorage.setItem('REFRESH_TOKEN_KEY', data.refreshToken)
    })

    setLog(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('ID_TOKEN_KEY')
    if (token) {
      const url = `https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/.json`
      log &&
        MakeAuthorizedRequest('GET', url).then((res) => {
          navigate('/home')
          console.log(res)
        })
    }
  }, [log])

  return (
    <div className='login'>
      <LoginHeader />
      <Form onSubmit={onSubmit} />
      <LoginFooter />
    </div>
  )
}

export default Login
