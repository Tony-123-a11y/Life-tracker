import React from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SideNav from './SideNavbar'
const Navbar = () => {
  const [x, setX] = useState(false)
    let navigate = useNavigate()

  return (
  
      <nav className='flex items-center justify-between px-8 py-9 h-16 shadow-sm shadow-gray-400 max-sm:px-4 relative'>
        {
          (x && <SideNav/>)
        }
     
        <h1 className='text-2xl capitalize font-bold text-blue-900'>Life tracker</h1>
       <div className="flex items-center justify-between  gap-6 w-[max-content]">
        <div className="flex items-center justify-center max-md:hidden">
           <input type="text" placeholder='Search' className='rounded-l-full border border-gray-400 px-4 py-2 0  outline-none  ' />
        <span className='bi bi-search w-10 h-10 flex items-center justify-center text-white  bg-blue-800 border box-content border-blue-800 cursor-pointer transition rounded-r-full'></span>
        </div>
       <button onClick={()=>setX(!x)}><i class="bi bi-list text-4xl md:hidden"></i></button>
       <ul className='flex items-center justify-between max-lg:hidden'>
            <li onClick={()=>navigate('/')} className='px-6 py-2 hover:bg-gray-200 transition cursor-pointer rounded-sm'>Home</li>
            <li onClick={()=>navigate('/expense')}  className='px-6 py-2 hover:bg-gray-200 transition cursor-pointer rounded-sm'>Expense</li>
            <li onClick={()=>navigate('/task')}  className='px-6 py-2 hover:bg-gray-200 transition cursor-pointer rounded-sm'>Tasks</li>
            
           
        </ul>
       </div>
      </nav>
   
  )
}

export default Navbar
