import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
  let emailTag=useRef()
let passTag=useRef()

const handleLogin= async (e)=>{
  e.preventDefault()
   let obj={
    email:emailTag.current.value,
    password:passTag.current.value
   }
  try {
    let data=await axios.post('http://localhost:8080/users/login',obj)
    alert(data.data)
  } catch (error) {
    alert(error.response.data)
  }

}

  return (
    <div className=" h-[100vh]  bg-gradient-to-br from-blue-300 to-purple-300  flex items-center justify-center ">
  <div className="container h-[700px]  max-lg:h-[570px] max-md:h-full   bg-white rounded-lg m-auto shadow-2xl shadow-gray-500 max-sm:rounded-none">
   <div className="flex items-center h-full justify-center"> 
    <div className="w-[60%] h-full  bg-center bg-cover  relative  shadow-sm shadow-black max-lg:w-[50%] max-md:hidden">
        <img src="newsbg.jpg" alt="" className="object-cover w-full h-full"/>
        <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60  drop-shadow-2xl backdrop-blur-sm">
            <h1 className="text-4xl text-white font-bold w-[70%] absolute top-10 tracking-wider leading-relaxed left-[50%] translate-x-[-50%] max-lg:text-xl max-sm:text-3xl">Welcome Back to Our News Platform!</h1>
            <h1 className="text-2xl text-white font-bold  absolute bottom-10 right-10 tracking-wide max-md:text-xl max-sm:text-3xl">&#8377;299<sub className="text-sm ">/Month</sub></h1>
        </div>
    </div>
    <div className="p-10 w-[35%] mx-auto max-lg:w-[50%]  max-md:w-[100%] max-sm:p-10">
        <h1 className="text-4xl font-bold">Welcome back</h1>
        <p className=" text-gray-500 mt-4 font-semibold">Please enter your details</p>
        <form className="mt-6">
            <div className=" relative mt-6">
                <label htmlFor="name">Your Email:</label>
                
            <input ref={emailTag}  name="EmailID" type="text" className="input border mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm"/>
            </div>
            <div className=" relative mt-6">
                <label htmlFor="name">Password:</label>
                
            <input ref={passTag}  name="Password" type="password" className="input  border mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm"/>
            <i className="bi bi-eye-slash text-2xl absolute right-2 top-9 cursor-pointer"></i>
            </div>
            <a href="#" className="my-4 block text-blue-500 underline text-end">Forgot Password?</a>
           
         <button onClick={handleLogin} className="text-sm border-2 w-full border-black rounded-sm px-8 py-2 font-semibold hover:text-white hover:bg-black transition max-sm:flex-grow">LOGIN</button>
         <p className="mt-6 text-center">New to our services? <a href="signup.html" className="text-blue-700 underline">Sign up</a></p>
        </form>
    </div>
   </div>
  </div>

    </div>
  )
}

export default Login
