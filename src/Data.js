import React from 'react'
import { useEffect, useState } from 'react';
import './Data.css'


const Data = () => {
    const [questions,setQuestions]= useState([]);
    const[selectedopt,setSelectedOpt] = useState([]);
    const [user,setUser] = useState({});
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      
       const foundUser = JSON.parse(loggedInUser);
       console.log(foundUser);
      setUser(foundUser);
    }
    fetch("http://localhost:5000/questions")
    .then(response=> response.json())
    .then(json=>{
     setQuestions(json);
  
    }).catch(err=>console.log(err));

  },[])
  
  const handleChange = (item,opt)=>{
    const answer= {
      userId: JSON.parse( localStorage.getItem("loggedInUser")).userid,
      qnum: item.qnum,
      answer: opt,
      isItForUpdate:false
    }
   
   var index= selectedopt.findIndex(obj=>obj.qnum===item.qnum)
   if(index<0)
   {
    
    setSelectedOpt([...selectedopt,answer]);
  
   }
  else{
   setSelectedOpt(selectedopt.map(obj=>{
    if(obj.qnum===item.qnum)
    {
      var updatedItem = {...obj,answer:opt,isItForUpdate:true};
      return updatedItem;
    }
    return obj;
  }));
  }
  
  }
  
  const handleSubmit = (e,obj) =>{
    e.preventDefault();
    var index = selectedopt.findIndex(item=>item.qnum === obj.qnum)
    fetch("http://localhost:5000/submitAnswer",
    {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        answers:selectedopt[index]
            })
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err));
  }
  
  const handleLogOut = () =>{
    window.location.href = "/Login";
  }
  
    return (
      <>
       <div>
      <button onClick={handleLogOut}className='btn btn-danger' id='lgt_btn'>Logout</button>
      </div>
      <div className='loggedin_user'>     
     <p>{user.Username}</p> 
      </div>
     
            <div>
        <h2>Let's Start</h2>
       </div>
      {questions.map((item,key)=>{
      return(
  <div key={key}>
    <p >{item.qnum}.{item.question}</p>
    <input type='radio'  name={item.qnum} value={item.opt1}
     onChange={()=>handleChange(item,item.opt1)}
     className="form-check-input"
     />
    <label>{item.opt1}</label>
    <br/>
    <input type='radio' name={item.qnum} value={item.opt2}
     onChange={()=>handleChange(item,item.opt2)}
     className="form-check-input"
     />
    <label>{item.opt2}</label> <br/>
    <input type='radio' name={item.qnum} value={item.opt3} 
    onChange={()=>handleChange(item,item.opt3)}
    className="form-check-input"
    />
    <label>{item.opt3}</label><br/>
    <input type='radio' name={item.qnum} value={item.opt4}
     onChange={()=>handleChange(item,item.opt4)}
     className="form-check-input"
     />
    <label>{item.opt4}</label> <br/><br/>
    <button onClick={(e)=> handleSubmit(e,item)} className='btn btn-success'>Submit</button>
    <hr/>
  
    </div>
    );
  
      })}   
      </>
    );
}

export default Data
