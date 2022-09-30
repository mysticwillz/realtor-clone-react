import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {getAuth, onAuthStateChanged} from "firebase/auth"
export default function Header() {
    const [pageState, setPageState] = useState("Sign In")
    const location = useLocation()
    const navigate = useNavigate()

    const auth = getAuth()

   useEffect(()=>(
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setPageState("Profile")
        }
        else{
            setPageState("Sign In ")
        }
    })
   ))
  
 let   pathMatchRoute=(route)=>{
        if( route === location.pathname){
            return true
        }
    }

 
  return (
<div className='bg-white border-b shadow-sm sticky top-0 z-50'>
    <div>
        <header className='flex justify-between items-center px-3 max-w-3xl mx-auto'>
            <div>
                <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo' className='h-5 cursor-pointer' onClick={()=> navigate("/")}/> 
                
            </div>
            <div>
                <ul className='flex space-x-4 cursor-pointer'>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`} onClick={()=>navigate("/profile")}>{pageState}</li>
                </ul>
            </div>

        </header>
    </div>
</div>  
  )
}
