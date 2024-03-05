import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css"

const Register = () => {
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
      <div className='Register_content'>
       <div className='content'>
      <form>
       <h2>Register Here</h2>
          <label>Name:</label><br/>
          <input type='text'   value={fname} onChange={(event)=>setFname(event.target.value)} className='form-control'/> <br/>
          <label>Email:</label> <br/>
          <input type='email'  value={email} onChange={(event)=>setEmail(event.target.value)} className='form-control'/> <br/>
          <label>Password:</label> <br/>
          <input type='password' value={paswd} onChange={(event)=>setPaswd(event.target.value)} className='form-control'/> <br/>
          <button onClick={handleLogin} className='btn btn-success' id='btn_reg'>Register</button>
          </form>
       </div>   
      </div>
    )
}

export default Register;
