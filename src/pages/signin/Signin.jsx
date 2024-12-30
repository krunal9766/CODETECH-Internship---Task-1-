import React from 'react'
import './signin.css'
import { useDispatch } from 'react-redux'
import loginActionCreator from '../../components/actionCreator/loginActionCreator'
import { Link } from 'react-router-dom'

function Signin() {
  const dispatch = useDispatch()

  const login = () => {
    dispatch(loginActionCreator())
  }

  return (
    <div className='signin'>
      <div className="signin-container">
        <div className='welcome-header'>
          LogIn or Signup
        </div>
        <div className='mobile-input-container'>
          <div className='mobile-input'>
            <input className='input-box' type='text' placeholder='Enter Mobile no.'></input>
          </div>
          <div className='mid-links'>
            <span>By continuing, i agree to the <Link>Terms Of Use</Link> & <Link>Privacy Policy</Link></span>
          </div>
          <button type="button" className="signin-btn" onClick={login}>Continue</button>
        </div>
        <div className='get-help'>
          <span>Have trouble logging in? <Link>Get Help</Link></span>
        </div> 
      </div>
    </div>
  )
  
}

export default Signin


