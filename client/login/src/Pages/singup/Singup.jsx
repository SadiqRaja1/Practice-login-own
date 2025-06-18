

export default function Singup () {
  return (
    <div className="flex justify-center items-center h-6/7">
        <form className="bg-blue-600 text-white rounded-b-full p-6 flex flex-col w-2/3 justify-center items-center">
          <h2 className="text-2xl font-semibold text-center mb-4">Create an Account</h2>

          <label htmlFor="name" className="text-xl">Name</label>
          <input type="text" id="name" placeholder="Enter your name" className="w-1/3 bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" />

          <label htmlFor="email" className="text-xl">Email</label>
          <input type="email" id="email" placeholder="Enter your emial id" className="w-1/3 bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" />

          <label htmlFor="password" className="text-xl">Password</label>
          <input type="password" id="password" placeholder="Create password" className="w-1/3 bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" />

          <label htmlFor="confirmPassword" className="text-xl">Confirm Password</label>
          <input type="text" id="confirmPassword" placeholder="Confirm password" className="w-1/3 bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" />

        </form>
    </div>
    )
}