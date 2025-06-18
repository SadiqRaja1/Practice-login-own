

export default function Singup () {
  return (
    <div className="flex justify-center items-center h-6/7">
        <form className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col w-1/3 items-center justify-center">
          <h2 className="text-2xl font-semibold text-center mb-4">Create an Account</h2>

          <label htmlFor="name" className="text-xl mb-1">Name</label>
          <input type="text" id="name" placeholder="Enter your name" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" />

          <label htmlFor="email" className="text-xl mb-1">Email</label>
          <input type="email" id="email" placeholder="Enter your emial id" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" />

          <label htmlFor="password" className="text-xl  mb-1">Password</label>
          <input type="password" id="password" placeholder="Create password" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" />

          <label htmlFor="confirmPassword" className="text-xl mb-1">Confirm Password</label>
          <input type="text" id="confirmPassword" placeholder="Confirm password" className="w-full bg-white text-black mb-3 py-1 px-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950" />

          <button type="sumbit" className="px-5 rounded py-1 bg-white text-black active:scale-110">Submit</button>

        </form>
    </div>
    )
}