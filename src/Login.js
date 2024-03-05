import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



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
    console.log(json);
    localStorage.clear();
    localStorage.setItem("loggedInUser",JSON.stringify(json));
   window.location.href = '/Data';
   })
   .catch(err=> alert(' User not found Please Register')); 

  }

  const handleRegister = (e) =>{
    e.preventDefault();
    window.location.href = "/Register";
  }

  return (
    <div className='Register_content'>
     <div className='content'> 
     <form>
     <h2>Login</h2>
        <label>Name:</label><br/>
        <input type='text'  value={fname} onChange={(event)=>setFname(event.target.value)} className='form-control'/> <br/>
        <label>Password:</label> <br/>
        <input type='password' value={paswd} onChange={(event)=>setPaswd(event.target.value)} className='form-control'/> <br/>
        <button onClick={handleLogin} className='btn btn-info' id='btn_login'>Login</button> &nbsp; &nbsp;
        <button className='btn btn-success' onClick={(e)=>handleRegister(e)}>Register</button>
     </form>
    </div>
    </div> 
  )

}

export default Login
