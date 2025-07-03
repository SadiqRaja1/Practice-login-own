import { useEffect, useState } from "react"
import axios from "axios";

export default function Front () {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const fetchData = async() => {
    try {
      let URL = import.meta.env.VITE_BACKEND_URL
      const response = await axios.get(`${URL}/api/users`, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      console.log(response.data)
      setUsers(response.data.Users);
    }catch(error) {
      console.error("An error occured while fetching data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="mx-5">
        <h1 className="text-4xl text-center my-5">Dashboard</h1>
        <div>
          <table className="w-full text-xl" >
            <thead>
              <tr className="grid grid-cols-3 ">
                <th className="border text-start px-2 py-1">Name</th>
                <th className="col-span-2 border text-start px-2 py-1">Email Id</th>
              </tr>
            </thead>
            <tbody className="text-start">
              {users.map((user) => (
                <tr key={user._id} className="grid grid-cols-3">
                  <td className="border px-2 py-1">{user.name}</td>
                  <td className="col-span-2 border px-2 py-1">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>  
  )
}