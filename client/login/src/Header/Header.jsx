import {Link} from "react-router-dom"

export default function Header () {
  return(
    <header className="w-full bg-black">
      <div>
        NotLogged In
      </div>
      <navbar>
        <Link to="/singup">Singup</Link>
        <Link to="/login">Login</Link>
      </navbar>
    </header>
    )
}