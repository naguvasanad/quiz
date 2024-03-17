import React, { useEffect, useState } from 'react'

const Header = () => {

    // const [user1,setUser1] = useState({});

    // useEffect(()=>{
    //     const loggedInUser = localStorage.getItem("loggedInUser");
    //     if (loggedInUser) {
          
    //        const foundUser = JSON.parse(loggedInUser);
    //        console.log(foundUser);
    //        setUser1(foundUser);
    //     }
    // })

    const handleLogout = (e)=>{
       e.preventDefault();
       window.location.href = "/Login";
    }

  return (
    <div>
      <button onClick={(e)=>handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Header
