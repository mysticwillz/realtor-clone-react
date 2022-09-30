import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import React from 'react'
import {FcGoogle} from "react-icons/fc"
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { db } from '../firebase'

export default function OAuth() {
  const navigate = useNavigate()
  async function onGoogleClick(){
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup( auth, provider)
      
      const user = result.user

      // check for the user (i.e if user is already existing in the database)
      const docRef = doc(db , "users", user.uid)

      const docSnap = await getDoc(docRef)
       if (!docSnap.exists()){
        await setDoc(docRef,
         {  name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()})
          navigate("/")

       }
      
      
    } catch (error) {
      console.log(error)
      toast.error("could not authorize with google")
    }

  }
  return (
    <button type='button' onClick={onGoogleClick} className='flex items-center justify-center text-white bg-red-700 w-full px-7 py-3 uppercase text-sm hover:bg-red-800 active:bg-red-900 font-medium hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out shadow-md rounded'>Continue With Google <FcGoogle className='ml-2 bg-white text-2xl rounded-full'/> </button>
  )
}
