import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import './Home.css'
const Home = () => {
  const navigate = useNavigate()
  const { dataJson, setDataJson, email } = useContext(AppContext)

  const onClickLogOut = () => {
    localStorage.removeItem('REFRESH_TOKEN_KEY')
    localStorage.removeItem('ID_TOKEN_KEY')
    navigate('/')
  }
  return (
    <div className='home'>
      <div className="logout-email">
      <div className="logout"><button  onClick={onClickLogOut}>LogOut</button></div>
      <div className="email"><FaUserCircle style={{fontSize:'1.5rem'}}/> Witaj <span>{(email.split('@')[0])}  </span> </div>
      </div>
      {dataJson &&
        Object.values(dataJson).map((data, index) => {
          return (
            <div
              className='root'
              key={index}
            >
              <div className='imageWrapper'>
                <div
                  className='image'
                  style={{
                    backgroundImage: `url(${data.image})`,
                  }}
                ></div>
              </div>
              <div className='textWrapper'>
                <div className='title'> {data.title}</div>
                <div className='category'> {data.category}</div>
                <div className='description'> {data.description}</div>
              </div>
              <div className="actionsWrapper">
                <button>VIEW COURSE</button>
                
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Home
