import React, { useState } from 'react'


const Login = () => {
   const [fname,setFname] = useState();
    const [paswd,setPaswd] = useState();
   

  const handleLogin = (e) =>{
    e.preventDefault();
    var NewUser ={
      FirstName:fname,
      password:paswd
    }
      fetch("http://localhost:5000/LoginUser",{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      User:NewUser
    })
   }).then(response=>response.json())
   .then(json=>{
    
    // var user = {
    //   "userid" : json.userid,
    //   "username": json.Username
    // }
    console.log(json);
    localStorage.clear();
    localStorage.setItem("loggedInUser",JSON.stringify(json));
   window.location.href = '/Data';
   })
   .catch(err=> alert('Failed'+err)); 

  }


  return (
    <div>
        <h2>Login</h2>
     <form>
        <label>Name:</label><br/>
        <input type='text'  value={fname} onChange={(event)=>setFname(event.target.value)}/> <br/>
        <label>Password:</label> <br/>
        <input type='password' value={paswd} onChange={(event)=>setPaswd(event.target.value)}/> <br/>
        <button onClick={handleLogin}>Login</button>
     </form>
    </div>
  )

}

export default Login
