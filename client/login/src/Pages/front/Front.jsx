export default function Front () {
  
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
              <tr className="grid grid-cols-3">
                <td className="border px-2 py-1">sadiq</td>
                <td className="col-span-2 border px-2 py-1">sadiq@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>  
  )
}