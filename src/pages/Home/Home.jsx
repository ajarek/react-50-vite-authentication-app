import React from 'react'
import { NavLink,useNavigate  } from 'react-router-dom'
import './Home.css'
const Home = () => {
  const navigate = useNavigate()
 const onClickLogOut = () => {
    localStorage.removeItem('REFRESH_TOKEN_KEY')
    localStorage.removeItem('ID_TOKEN_KEY')
    navigate('/')
  }
  return (
    <div>
      <button onClick={ onClickLogOut}>LogOut</button>
    </div>
  )
}

export default Home