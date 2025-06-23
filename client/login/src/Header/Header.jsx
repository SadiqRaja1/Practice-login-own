import {Link, useNavigate} from "react-router-dom"
import "./Header.css"

export default function Header () {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const handleLogout = ()=> {
    localStorage.removeItem("token")
    navigate("/login");
  }
   
  return(
    <header id={token ? "logedIn" : "notLoggedIn"} className="w-full h-14 flex justify-between px-16 items-center text-white rounded-b-full">
      {token ?       <div className="text-xl sm:text-3xl">
        Logged In
      </div>
      :
      <div className="text-xl sm:text-3xl">
        NotLogged In
      </div> }

      {token ? 
      <nav className="sm:text-2xl">
        <Link className="hover:text-black" to="/dashboard">Dashboard</Link>
        <button className="ml-3 hover:text-black" onClick={handleLogout}>Logout</button>
      </nav>
      :       
      <nav className="sm:text-2xl">
        <Link className="hover:text-black" to="/signup">Signup</Link>
        <Link className="ml-3 hover:text-black" to="/login">Login</Link>
      </nav>}

    </header>
  )
}