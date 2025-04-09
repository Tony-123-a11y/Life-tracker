import React, { useEffect } from 'react'
import PrintText from './PrintText'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='mt-4 flex font-primary'>
     <div className="container xl:max-w-7xl  px-10 m-auto">
     <div className=" flex flex-col items-center text-center py-20">
      <motion.h1
        className="text-5xl font-bold text-gray-900 mb-4 dark:bg-black max-md:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Stay Organized, Stay Ahead
      </motion.h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-6  max-md:text-base">
      Track your expenses and manage your tasks in one place. Take control of your finances and productivity with our all-in-one life management platform.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 text-lg rounded-xl bg-blue-600 text-white hover:bg-blue-700 max-md:text-base  max-md:px-4 max-md:py-2">
          Get Started
        </button>
        <button className="px-6 py-3 text-lg rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 max-md:text-base max-md:px-4 max-md:py-2">
          Learn More
        </button>
      </div>
    </div>
    <div className="relative z-10 grid grid-cols-2 gap-4 max-sm:block">
                <Link to={'/expense'} className=" bg-white/95 dark:bg-gray-800/95 p-4 rounded-lg block shadow-lg border">
                  <div className="flex items-center space-x-2 mb-2">
                    
                    <h3 className="font-medium">Expense Tracker</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Groceries</span>
                      <span className="text-sm font-medium">$120.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Utilities</span>
                      <span className="text-sm font-medium">$85.20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Entertainment</span>
                      <span className="text-sm font-medium">$65.75</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full mt-2">
                      <div className="h-full bg-violet-500 rounded-full w-[65%]"></div>
                    </div>
                  </div>
                </Link>
                <Link to={'/task'} className='shadow-lg px-4 border py-4 rounded-lg max-sm:my-4 block'>
                <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-medium">Task List</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="h-4 w-4 border border-gray-300 dark:border-gray-600 rounded mr-2 bg-violet-500 dark:bg-violet-600 flex items-center justify-center">
                      </div>
                      <span className="text-sm line-through text-gray-500 dark:text-gray-400">Morning workout</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 border border-gray-300 dark:border-gray-600 rounded mr-2"></div>
                      <span className="text-sm">Grocery shopping</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 border border-gray-300 dark:border-gray-600 rounded mr-2"></div>
                      <span className="text-sm">Team meeting at 3 PM</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 border border-gray-300 dark:border-gray-600 rounded mr-2"></div>
                      <span className="text-sm">Pay utility bills</span>
                    </div>
                  </div>
                </Link>
              </div>
                
                
     </div>
    </div>
  )
}

export default Home
