import React, { useState } from 'react'

export default function Profile() {

  const [data, setData] = useState({
    name:'wills',
    email:'ezewilliamsezebuilo1010@hgmail.com'
  });
  const {name,email} = data
  return (
    <>
    <section className='max-w-4xl mx-auto flex  flex-col justify-center items-center'>
      <h1 className='text-3xl text-center mt-6 font-bold '> My Profile</h1>

      <div className=' w-full md:w-[50%] mt-6 px-3'>
        <form>
         {/* name input */}
          <input type="text" id="name" value={name} disabled className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out " />

          {/* email input */}
          <input type="email" id="email" value={email} disabled className=" mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out " />

          <div className='flex justify-between whitespace-nowrap text-sm md:text-lg'>
            <p className='flex items-center'> Do you want to change your name? <span className='text-red-600 hover:text-red-800 transition duration-150 ease-in-out cursor-pointer'>Edit</span> 
            </p>
            <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-out cursor-pointer'>Sign Out</p>
          </div>
         
          
        </form>
      </div>
    </section>

    </>
  )
}
