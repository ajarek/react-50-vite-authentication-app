import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Routes>
      <Route
          path='/login'
          element={<Login/>}
        />
         <Route
          path='/register'
          element={<Register/>}
        />
      
      </Routes>
    </div>
  )
}

export default App
