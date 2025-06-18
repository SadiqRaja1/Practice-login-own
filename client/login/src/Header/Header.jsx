import {Link} from "react-router-dom"

export default function Header () {
  return(
    <header className="w-full h-14 flex justify-between px-16 items-center bg-blue-600 text-white rounded-b-full">
      <div className="text-3xl">
        NotLogged In
      </div>
      <nav className="text-2xl">
        <Link className="hover:text-black" to="/signup">Signup</Link>
        <Link className="ml-3 hover:text-black" to="/login">Login</Link>
      </nav>
    </header>
    )
}