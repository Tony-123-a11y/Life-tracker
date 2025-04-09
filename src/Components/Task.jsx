import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function Task() {
    let inputTagOne= useRef()
    let inputTagTwo= useRef()

    
    const [arr, setarr] = useState([
        {
            Sno:'1',
            Name: 'HTML',
            Status:'Incompleted',
        
        },
        {
            Sno:'2',
            Name: 'CSS',
            Status:'Incompleted',
        
        },
        {
            Sno:'3',
            Name: 'Javascript',
            Status:'Incompleted',
        
        },
        {
            Sno:'4',
            Name: 'React',
            Status:'Incompleted',
        
        }
    ])
    let obj={
        Name:'',
        Status:'Incompleted'
    }
    function handleSubmit(e){
        e.preventDefault()
        obj.Name=inputTagTwo.current.value
        setarr([...arr,obj])
        inputTagOne.current.value=''
        inputTagTwo.current.value=''

    }
    function handleDel(delSno){
      let arrNew=[...arr]
      arrNew.splice(delSno,1)
       setarr(arrNew)
    }
    function handleUpdt(updtNum){
        console.log(updtNum)
        let arrNew=[...arr]
           if(arr[updtNum].Status==="Incompleted"){
              arrNew[updtNum].Status='Completed'
              setarr(arrNew)
           }
           else{
            arrNew[updtNum].Status='Incompleted'
            setarr(arrNew)
           }
            }
        
        
    
  return (
    <div className='container b p-4 xl:max-w-[1200px] m-auto mt-10 bg-white'>
      <div className="">
        <form className='rounded-sm max-w-[500px] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-purple-400 py-2 px-2'>
            <input ref={inputTagTwo} type="text" placeholder='Task Name' className='border py-2 px-4 w-full rounded-sm focus:outline-none ' />
            <button onClick={handleSubmit} className='px-8 py-2 rounded-sm text-white transition border-black bg-black hover:bg-white hover:text-black'>Add</button>
        </form>
        <table cellPadding='5' className=' text-center w-full border-2 border-blue-600 border-b-4 mt-10'>
            <thead className='bg-blue-600 text-white text-lg'>
                <tr>
                    <th>SNo</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Actions</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((object,i)=>{
                        return <tr className={` ${object.Status==="Completed"? 'bg-rowColorComp': 'bg-white'} `}>
                        <td className='py-5'>{i+1}.</td>
                        <td className='py-5'>{object.Name}</td>  
                        <td className='py-5'>{object.Status}</td>
                        <td className='flex py-3 px-3 justify-center items-center gap-4 max-lg:flex-wrap '>
                        <button onClick={()=>handleUpdt(i)} className='w-[25%] py-2 px-4   rounded-md font-semibold bg-green-200 shadow-inner shadow-green-400 max-lg:flex-grow max-sm:hidden'>Update</button>
                        <button onClick={()=>handleUpdt(i)} className='w-10 h-10 rounded-full items-center justify-center    font-semibold bg-green-200  shadow-green-400 shadow-inner max-sm:flex hidden '>U</button>
                        <button onClick={()=>handleDel(i)} className='w-10 h-10 rounded-full  items-center justify-center font-semibold bg-red-200 shadow-inner shadow-red-400 max-sm:flex hidden '>D</button>
                        <button onClick={()=>handleDel(i)} className='w-[25%] py-2 px-4  rounded-md font-semibold bg-red-200 shadow-inner shadow-red-400 max-lg:flex-grow max-sm:hidden'>Delete</button></td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Task
