import { useState } from 'react';
import axios from "axios";

export default function Singup () {
  
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleChange = (e) => {
    let {name, value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(data.password === confirmPassword){
      try{
        let URL = import.meta.env.VITE_BACKEND_URL
        let res = await axios.post(`${URL}/user/register`,data)
        console.log(res);
      }catch(error){
      console.error("Some issue occured", error)
      }
    }else{
      alert("password mismatch");
    }

  }
  
  return (
    <div className="flex justify-center items-center h-5/6 sm:h-6/7">
        <form className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col sm:w-1/3 items-center justify-center" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center mb-4">Create an Account</h2>

          <label htmlFor="name" className="text-xl mb-1">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" value={data.name} onChange={handleChange}/>

          <label htmlFor="email" className="text-xl mb-1">Email</label>
          <input type="email" id="email" placeholder="Enter your emial id" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" name="email" value={data.email} onChange={handleChange}/>

          <label htmlFor="password" className="text-xl  mb-1">Password</label>
          <input type="password" id="password" placeholder="Create password" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" name="password" value={data.password} onChange={handleChange}/>

          <label htmlFor="confirmPassword" className="text-xl mb-1">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm password" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" name="confirmPassword" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>

          <button type="sumbit" className="px-5 rounded py-1 bg-white text-black active:scale-110">Submit</button>

        </form>
    </div>
    )
}