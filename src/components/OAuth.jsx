import React from 'react'
import {FcGoogle} from "react-icons/fc"

export default function OAuth() {
  return (
    <button className='flex items-center justify-center text-white bg-red-700 w-full px-7 py-3 uppercase text-sm hover:bg-red-800 active:bg-red-900 font-medium hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out shadow-md rounded'>Continue With Google <FcGoogle className='ml-2 bg-white text-2xl rounded-full'/> </button>
  )
}
