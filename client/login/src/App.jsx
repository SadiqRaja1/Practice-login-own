import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from "react-router-dom";
import Login  from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup"
import Front from "./Pages/front/Front"
import Header from "./Header/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <div className='h-screen'>
        <Header />
        <Routes>
          <Route path="/" element={< Front />}/>
          <Route path="/login" element={< Login />}/>
          <Route path="/signup" element={< Signup />}/>
          <Route path="/dashboard" element={< Front />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
