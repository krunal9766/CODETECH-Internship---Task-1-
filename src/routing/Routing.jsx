import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { routes } from './Routes'
import { useSelector } from 'react-redux'
import Signin from '../pages/signin/Signin'
import Signup from '../pages/signup/Signup'
import loginreducer from '../reducer/loginReducer'
import Home from '../pages/home/Home'

function Routing() {
          const isLoggedIn = useSelector((store)=>{
            return store.loginreducer.isLoggedIn;
          })

  return (
    <div>
    <Routes>
        {
          routes.map((ele)=>
          {
            return <Route 
                      key={ele.index+100}
                      path={ele.path} 
                      element={isLoggedIn ? ele.component : <Signin />} />
          }
           )
        }
  
        <Route path={"/signup"} element={isLoggedIn ? <Home></Home> : <Signup></Signup>} ></Route>
    </Routes>
    </div>
  )
}

export default Routing