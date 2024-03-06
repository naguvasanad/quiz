import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Elements = () => {
  return (
    <>
    <div className='list_item'>
           <ul>
      <li style={{listStyleType:"none",textDecoration:"none"}}><Link to="/Register">Register</Link></li>
      <li style={{listStyleType:"none",textDecoration:"none"}}><Link to="/Login">Login</Link></li>
      
      </ul>
      <Outlet/>
        </div>

   
    </>
  )
}

export default Elements
