import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import { Routes, Route} from 'react-router-dom'
import { useState, createContext } from 'react'
export const AppContext = createContext()
function App() {
  const [dataJson,setDataJson]=useState(null)
  const [email, setEmail ]=useState('')
  const token = localStorage.getItem('ID_TOKEN_KEY')||null
  return (
    <div className='App'>
      <AppContext.Provider value={{dataJson,setDataJson,email, setEmail }}>
      <Routes>
      <Route
          path='/'
          element={<Login/>}
        />
         <Route
          path='/register'
          element={<Register/>}
        />
        {token? 
        <Route
          path='/home'
          element={<Home/>}
        />
        :null
        }
      
      </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
