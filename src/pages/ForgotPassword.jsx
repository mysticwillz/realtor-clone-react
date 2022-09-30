import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import OAuth from '../components/OAuth'

export default function ForgotPassword() {

    const [email, setEmail] = useState("")
    function onChange (e){
       setEmail(e.target.value)
       };

       async function onSubmit(e){
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth,email)
            toast.success("email was sent")
            
        } catch (error) {
            toast.error("could not send reset password")
            
        }
       }
       
          
    

  return (
    <section>
        <h1 className='text-center text-3xl mt-6 font-bold'> Forgot Password</h1>
        <div className=' flex flex-wrap justify-center flex-wrap  items-center  px-6 py-12 max-w-4xl mx-auto gap-5'>
            <div className='max-w-[350px] mb-12 me-[16px]'>
                <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80' alt='key' className='w-full rounded-2xl'/>
            </div>
            <div className='w-full md:max-w-[400px]'>
                <form onSubmit={onSubmit}>
                  
                    <div>
                    <input type="email" placeholder="Email Address" id="email" value={email} onChange={onChange} className='w-full bg-white text-gray-700 border-gray-300 rounded transition ease-in-out'></input>

                    </div>
                    
                    <div className='flex text-[12px] justify-between whitespace-nowrap'>
                    <p> Don't have an account? <Link to="/sign-up" className='text-red-600 hover:text-red-700'>Sign up</Link></p>
                     <p><Link to="/sign-in" className='text-blue-600 hover:text-blue-900'>Sign in instead</Link></p>
                    </div>
                    <button type='submit' className='w-full text-sm font-medium bg-blue-600 text-white px-7 py-3 uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out active:bg-blue-800'>SEND RESET PASSWORD</button>
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
