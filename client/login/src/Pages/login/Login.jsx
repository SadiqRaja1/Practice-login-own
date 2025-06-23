import { useState } from "react"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export default function Login () {
  const [data, setData] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let URL = import.meta.env.VITE_BACKEND_URL;
      let res = await axios.post(`${URL}/auth/login`,data)
      localStorage.setItem("token",res.data.token)
      navigate("/dashboard")
    }catch(error){
      console.log("Some thing went wrong", error)
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-5/6 sm:h-6/7">
        <form className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col sm:w-1/3 items-center justify-center" onSubmit={handleSubmit}>

          <h2 className="text-2xl font-semibold text-center mb-4">Enter the below detail</h2>

          <label htmlFor="email" className="text-xl mb-1">Email</label>
          <input type="email" id="email" placeholder="Enter your email id" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" name="email" value={data.email} onChange={handleChange}/>

          <label htmlFor="password" className="text-xl  mb-1">Password</label>
          <input type="password" id="password" placeholder="Create password" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" name="password" value={data.password} onChange={handleChange}/>

          <button type="sumbit" className="px-5 rounded py-1 bg-white text-black active:scale-110">Submit</button>

        </form>
    </div>
    </>
  )
}