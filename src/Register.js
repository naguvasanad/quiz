import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css"


const Register = () => {
    const [fname,setFname] = useState();
    const [email,setEmail] = useState();
    const [paswd,setPaswd] = useState();
    const [success,setSuccess] = useState(false);
     
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
        setSuccess(true);
        alert("success");
      }else{
       setSuccess(false);
        
      }
     })
     .catch(err=> alert('Failed'+err)); 
  
    }

    const handleOnChange = (event) =>{
      event.preventDefault();
      setFname(event.target.value);
      fetch("http://localhost:5000/checkuser",{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        username: event.target.value
      })
     }).then(response=>response.json())
     .then(json =>{
      if(json>-1){
        setSuccess(false)
      }else{
        setSuccess(true);
      }
     })
    }

    const handleBack = (e) =>{
     e.preventDefault();
     window.location.href = "/";
    }



    return (
      <div className='Register_content'>
       <div className='content'>
      <form>
       <h2>Register Here</h2>
          <label>Name:</label><br/>
          <input type='text'  
           onChange={(event)=>handleOnChange(event)} 
           className='form-control'/> <br/>
         
         <p>{success?<span style={{color:'green'}}>User is available</span>:<span style={{color:'red'}}>This user is not available</span>}</p>
         
          <label>Email:</label> <br/>
          <input type='email'  
          value={email} 
          onChange={(event)=>setEmail(event.target.value)} 
          className='form-control'/> <br/>

          <label>Password:</label> <br/>
          <input type='password'
           value={paswd} 
           onChange={(event)=>setPaswd(event.target.value)}
            className='form-control'/> <br/>
         {success? <button onClick={handleLogin} className='btn btn-success' id='btn_reg'>Register</button>: <button onClick={handleLogin} className='btn btn-success' id='btn_reg' disabled>Register</button>}
         &nbsp; &nbsp;
         <button onClick={(e)=>handleBack(e)} className='btn btn-primary'>Back</button>
          </form>
       </div>   
      </div>
    )
}

export default Register;
