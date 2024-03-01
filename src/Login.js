import React, { useState } from 'react'

const Login = () => {
  const [fname,setFname] = useState();
  const [email,setEmail] = useState();
  const [paswd,setPaswd] = useState();

  const handleLogin = (e) =>{
    e.preventDefault();
    var NewUser ={
      FirstName:fname,
      Email:email,
      password:paswd
    }
    console.log(NewUser);
   fetch("http://localhost:5000/CreateNewuser",{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      User:NewUser
    })
   }).then(response=>response.json())
   .then(json=>{
    if(json>0){
      alert('Success');
    }else{
      alert('Failed');
    }
   })
   .catch(err=> alert('Failed'+err)); 

  }


  return (
    <div>
        <h2>Register Here</h2>
     <form>
        <label>Name:</label><br/>
        <input type='text'  value={fname} onChange={(event)=>setFname(event.target.value)}/> <br/>
        <label>Email:</label> <br/>
        <input type='email'  value={email} onChange={(event)=>setEmail(event.target.value)}/> <br/>
        <label>Password:</label> <br/>
        <input type='password' value={paswd} onChange={(event)=>setPaswd(event.target.value)}/> <br/>
        <button onClick={handleLogin}>Register</button>
     </form>
    </div>
  )
}

export default Login
