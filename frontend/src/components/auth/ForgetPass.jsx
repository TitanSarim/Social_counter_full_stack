import React from 'react'
import { Link } from 'react-router-dom'


const ForgetPass = () => {
  return (
    <div className='auth-container'>

        <div className='auth-wrapper'>
            <p>Screen Counter</p>


            <div className='auth-input'>
                <input type='email' placeholder='Your Email'/>
            </div>

            <div className='auth-links'>
                <p>Wanna go back?</p>
                <Link to="/login">Login</Link>
            </div>
            
            <button>Request</button>

        </div>

    </div>
  )
}

export default ForgetPass