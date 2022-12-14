import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {db}from "../firebase"
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import {toast} from "react-toastify"

export default function SignUp() {

    const [data, setData] = useState({
        email:"",
        password:"",
        name:""
    });
    
    const {email, password, name} = data
    
    const navigate = useNavigate()
    
    function onChange (e){
       setData((prev)=>({
        ...prev,
        [e.target.id]:e.target.value
        
       }))
       
          
    }
    async function onSubmit (e){
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            updateProfile(auth.currentUser,{displayName:name})
            
            const user = userCredential.user

            const dataCopy = { ...data}
            delete dataCopy.password
            dataCopy.timestamp = serverTimestamp();

            await setDoc(doc(db, "users", user.uid),dataCopy)
         
            navigate("/")
        } catch (error) {
            toast.error("there is an error on registration")
        }

    }

  return (
    <section>
        <h1 className='text-center text-3xl mt-6 font-bold'> Sign Up</h1>
        <div className=' flex flex-wrap justify-center flex-wrap  items-center  px-6 py-12 max-w-4xl mx-auto gap-5'>
            <div className='max-w-[350px] mb-12 me-[16px]'>
                <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80' alt='key' className='w-full rounded-2xl'/>
            </div>
            <div className='w-full md:max-w-[400px]'>
                <form onSubmit={onSubmit}>
                    <div>
                    <input type="text" placeholder="Full Name" id="name" value={name} onChange={onChange} className='w-full bg-white text-gray-700 border-gray-300 rounded transition ease-in-out'></input>

                    </div>
                    <div>
                    <input type="email" placeholder="Email Address" id="email" value={email} onChange={onChange} className='w-full bg-white text-gray-700 border-gray-300 rounded transition ease-in-out'></input>

                    </div>
                    <div>
                    <input type="password" placeholder="Enter Your Password" id="password" value={password} onChange={onChange} className='w-full bg-white text-gray-700 border-gray-300 rounded transition ease-in-out'></input>
                    </div>
                    <div className='flex text-[12px] justify-between whitespace-nowrap'>
                    <p> Have an account? <Link to="/sign-in" className='text-red-600 hover:text-red-700'>Login</Link></p>
                     <p><Link to="/forgot-password" className='text-blue-600 hover:text-blue-900'>Forgot password?</Link></p>
                    </div>
                    <button type='submit' className='w-full text-sm font-medium bg-blue-600 text-white px-7 py-3 uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out active:bg-blue-800'>Sign in</button>
                <div className='flex items-center my-4 before:border-gray-300 after:flex-1 after:border-gray-300 before:flex-1 before:border-t   after:border-t ' >
                    
                <p className='text-center font-semibold mx-4'>OR</p>
                </div>
                
                <OAuth />
                </form>
               
                </div>
              
        </div>
    </section>
  )
}
