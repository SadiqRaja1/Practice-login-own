import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from "react-router-dom";
import Login  from "./Pages/login/Login";
import Singup from "./Pages/singup/Singup"
import Front from "./Pages/front/Front"
import Header from "./Header/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={< Front />}/>
        <Route path="/login" element={< Login />}/>
        <Route path="/singup" element={< Singup />}/>
      </Routes>
    </>
  )
}

export default App
