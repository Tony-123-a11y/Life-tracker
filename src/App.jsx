import { useContext, useState } from 'react'
import './App.css'
import Task from './Components/Task'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Expense from './Components/Expense'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserContext from './context/UserContext'

function App() {
  let {login,token}=useContext(UserContext)
  const [data, setdata] = useState([])
  function send(ans){
    setdata(ans)
  }

  return (
    <>
   
      <BrowserRouter>
      {login ?  <Navbar/>: '' }
    
      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/task' element={<Task/>}></Route>
        <Route path='/expense' element={<Expense func={send}/>}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
