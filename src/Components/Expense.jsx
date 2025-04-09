import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import PrintText from './PrintText'
function Expense(props) {
    
  let inputOne= useRef()
  let inputTwo= useRef()
    const [arr, setarr] = useState([
        {
           
            Name:'Food',
            Price:'100'
        },
        {
          
            Name:'Drinks',
            Price:'300'
        },
        {
           
            Name:'Transport',
            Price:'500'
        }
    ])
    props.func(arr)
    let obj={
        Name:'',
        Price:''
    }
    function handleSubmit(e){
        e.preventDefault()
        
        obj.Name=inputOne.current.value
        obj.Price=inputTwo.current.value
       setarr([...arr,obj])

    }
    function handleDel(delIndex){
       let arrNew=[...arr]
       arrNew.splice(delIndex,1)
    setarr(arrNew)
    }

    const [upateBtn, setupateBtn] = useState(false);
    const [selectIndex, setselectIndex] = useState('')
    function handleUpdt(updtIndex){
        inputOne.current.focus()
        // inputTwo.current.focus()
        inputOne.current.value=arr[updtIndex].Name
        inputTwo.current.value=arr[updtIndex].Price
        setselectIndex(updtIndex)
        setupateBtn(true)
    }
    function handleValue(e){
        e.preventDefault()
        let arrNew=[...arr]
        let obj={
            Name:inputOne.current.value,
            Price:inputTwo.current.value,
            
        }
     arrNew[selectIndex]=obj
     inputOne.current.value=''
inputTwo.current.value=''
     setarr(arrNew)
     setupateBtn(false)
     setselectIndex('')
        
            }


  return (
    <div className='container p-4 xl:max-w-[1200px] m-auto mt-10 bg-white'>
       
    <div className="">
      <form className='rounded-sm flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-purple-400 py-2 px-2 max-sm:block max-sm:space-y-3'>
          <input ref={inputOne}  type="text" placeholder='Expense Name' className='border py-2 px-4 w-full rounded-sm outline-none '/>
          <input ref={inputTwo}  type="number" placeholder='Price' className='border py-2 px-4 w-full rounded-sm outline-none ' />
        { upateBtn===false?  <button onClick={handleSubmit} className='px-8 py-2 rounded-sm text-white transition border-black bg-black hover:bg-white hover:text-black'>Add</button>
         : <button onClick={handleValue} className='px-8 py-2 rounded-sm text-white transition border-black bg-black hover:bg-white hover:text-black'>Update</button>}
      </form>
      <table cellPadding='12 ' className=' flex-grow text-center w-full border-2 border-blue-600 border-b-4 mt-10'>
          <thead className='bg-blue-600 text-white text-lg'>
              <tr>
                  <th>SNo</th>
                  <th>Exp</th>
                  <th>Status</th>
                  <th>Actions</th>
                 
              </tr>
          </thead>
          <tbody>
             {
                arr.map((object,i)=>{
                    return <tr>
                        <td>{i+1}.</td>
                        <td>{object.Name}</td>
                        <td>{object.Price}</td>
                        <td className='flex py-3 px-3 justify-center items-center gap-4 max-lg:flex-wrap '> 
                        <button onClick={()=>handleUpdt(i)} className=' font-semibold w-[25%] py-2 px-4   rounded-md  bg-green-200 shadow-inner shadow-green-400 max-lg:flex-grow max-sm:hidden'>Update</button>
                        <button onClick={()=>handleUpdt(i)} className=' font-semibold w-10 h-10 rounded-full items-center justify-center     bg-green-200  shadow-green-400 shadow-inner max-sm:flex hidden '>U</button>
                        <button onClick={()=>handleDel(i)} className=' font-semibold w-10 h-10 rounded-full  items-center justify-center  bg-red-200 shadow-inner shadow-red-400 max-sm:flex hidden '>D</button>
                        <button onClick={()=>handleDel(i)} className=' font-semibold w-[25%] py-2 px-4  rounded-md  bg-red-200 shadow-inner shadow-red-400 max-lg:flex-grow max-sm:hidden'>Delete</button></td>
                    </tr>
                })
             }
              
          </tbody>
      </table>
    </div>
  </div>
  )
}

export default Expense
