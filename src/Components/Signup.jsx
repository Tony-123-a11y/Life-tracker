import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
const Signup = () => {
      let emailTag=useRef()
    let passTag=useRef()
    let nameTag=useRef()
    const handleRegister= async (e)=>{
        e.preventDefault()
         let obj={
          name:nameTag.current.value,
          email:emailTag.current.value,
          password:passTag.current.value
         }
        try {
          let data=await axios.post('http://localhost:8080/users/register',obj)
          alert(data.data)
          
        } catch (error) {
          alert(error.response.data)
         
        }
      
      }
  return (
    <div className="bg-gradient-to-br flex h-[100vh] justify-center items-center from-blue-300 to-purple-300  max-sm:p-0">
  <div className="container  md:max-w-[870px]  bg-white rounded-lg m-auto shadow-2xl shadow-gray-500 max-sm:rounded-none ">
   <div className="flex items-center justify-between h-[630px] max-sm:block">
    <div className={`w-[50%]  h-full bg-[url(/bgOne.jpeg/)] bg-center bg-cover rounded-l-lg relative max-sm:w-full max-sm:rounded-none shadow-sm shadow-black`}>
        <div className="absolute left-0 top-0 w-full h-full bg-purple-900 bg-opacity-40 rounded-l-lg drop-shadow-2xl">
            <h1 className="text-2xl text-white font-bold w-[80%] absolute bottom-28 tracking-wide left-[50%] translate-x-[-50%] max-md:text-xl max-sm:text-3xl">Get Latest News From Our Fast News Services!</h1>
            <h1 className="text-2xl text-white font-bold  absolute bottom-10 right-10 tracking-wide max-md:text-xl max-sm:text-3xl">&#8377;299<sub className="text-sm ">/Month</sub></h1>
        </div>
    </div>
    <div className="px-10 bg-white max-md:px-6 max-sm:p-10">
        <h1 className="text-2xl font-bold">Registration Form</h1>
        <form action="#" className="mt-6">
            <div className=" relative">
                <label htmlFor="name">Full Name:</label>
            <input ref={nameTag} name="Name" type="text" placeholder="ex: Ayush Singh" className="input border py-2 px-4 mt-2 rounded-md placeholder:text-sm w-full shadow-sm"/>
            <i className="bi bi-person-fill text-2xl absolute right-2 top-9"></i>
            </div>
            <div className=" relative mt-6">
                <label htmlFor="name">Your Email:</label>
            <input ref={emailTag} name="EmailID" type="text" className="input border mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm"/>
            </div>
            <div className=" relative mt-6">
                <label htmlFor="name">Password:</label>
            <input ref={passTag} name="Password" type="password" className="input  border mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm"/>
            <i  className="bi bi-eye-slash text-2xl absolute right-2 top-9 cursor-pointer"></i>
            </div>
            <div className=" relative mt-6">
                <label htmlFor="name">Confirm Password:</label>
            {/* <input ref={Tag} name="ConfirmPassword" type="password" className="input border  mt-2 py-2 px-4 rounded-md placeholder:text-sm w-full shadow-sm "/>
            <i onClick="handlePass(event)" className="bi bi-eye-slash text-2xl absolute right-2 top-9 cursor-pointer"></i> */}
            </div>
           <div className="flex  items-start justify-start gap-4 mt-5 checkBox">
            
            <input type="checkbox" name="" id="check" className=""/>
            <label htmlFor="check" className="relative flex justify-center items-center mt-1"><i className="bi bi-check w-full h-full"></i></label>
            <div className="text-sm">
                <p>By signing up,you agree to the</p>
                <a href="#" className="underline text-blue-600 mt-1 block">Play Terms of Service</a>
            </div>
           </div>
         <div className="mt-6 flex justify-start items-center space-x-5  flex-wrap max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:space-x-0">
            <button onClick={handleRegister} className="text-sm bg-blue-600 rounded-sm px-8 py-2 font-semibold text-white border-2 border-blue-600 hover:border-blue-800  hover:bg-blue-800 transition max-sm:flex-grow">Register</button>
            <span className="text-sm font-semibold max-sm:flex-grow text-center">OR</span>
            <a href="login.html" className="text-sm border-2 border-black rounded-sm px-8 py-2 font-semibold hover:text-white hover:bg-black transition max-sm:flex-grow">LOGIN</a>
         </div>
        </form>
    </div>
   </div>
  </div>

    </div>
  )
}

export default Signup
