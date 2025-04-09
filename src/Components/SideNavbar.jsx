import React from 'react'
import { easeIn, motion } from 'motion/react'
import { easeOut } from 'motion'
import { Link } from 'react-router-dom'


const SideNav = () => {
  let arr=[
    {
    title:'Home',
    path:'/'
    },
    {
    title:'Expense',
    path:'/expense'
    },
    {
    title:'Task',
    path:'/task'
    },
      ]
      
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    className="fixed top-[55px] left-0 w-full  h-[calc(100vh-74px)] bg-black/60 z-20">
      <motion.div
      initial={{
       translateY:-50
      }
      }
      animate={{
       translateY:0
      
      }}
      transition={{
        duration:.2,
        ease:easeOut
        
      }}
      className=' bg-white   relative'
      >
       {/* <h1 className='py-4 px-5 text-xl font-medium'>Routes</h1> */}
       <ul className='text-center py-6 space-y-1'>
       {
              arr.map((ele,i)=>{
               return  <li key={i} className='px-5 shadow-sm  py-3 cursor-pointer relative capitalize '><Link to={ele.path}>{ele.title}</Link></li>
              })
            }
            </ul>
      </motion.div>
    </motion.div>
  )
}

export default SideNav
