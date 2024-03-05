import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Elements = () => {
  return (
    <>
    <div>
           <ul>
        <li style={{listStyleType:"none",textDecoration:"none"}}><Link to="/Register">Register</Link></li>
      <li style={{listStyleType:"none",textDecoration:"none"}}><Link to="/Login">Login</Link></li>
      
      </ul>
      <Outlet/>
        </div>
    <div>
      <h2>This is Online Quiz Website...</h2>
    </div>
    </>
  )
}

export default Elements
