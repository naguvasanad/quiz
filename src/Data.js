import React from 'react'
import { useEffect, useState } from 'react';

const Data = () => {
    const [questions,setQuestions]= useState([]);
    const[selectedopt,setSelectedOpt] = useState([]);
    
  
  useEffect(()=>{
    fetch("http://localhost:5000/questions")
    .then(response=> response.json())
    .then(json=>{
     setQuestions(json);
  
    }).catch(err=>console.log(err));
  },[])
  
  const handleChange = (item,opt)=>{
    const answer= {
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
  //  var dupsel=selectedopt;
  //   dupsel[index].answer=opt;  
  //   //setSelectedOpt([]);
  //   setSelectedOpt(dupsel);  
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
  
  
    return (
      <>
      
      {questions.map((item,key)=>{
      return(
  <div key={key}>
    <p>{item.qnum}</p>
    <p >{item.question}</p>
    <input type='radio'  name={item.qnum} value={item.opt1} onChange={()=>handleChange(item,item.opt1)}/>
    <label>{item.opt1}</label>
    <br/>
    <input type='radio' name={item.qnum} value={item.opt2} onChange={()=>handleChange(item,item.opt2)}/>
    <label>{item.opt2}</label> <br/>
    <input type='radio' name={item.qnum} value={item.opt3} onChange={()=>handleChange(item,item.opt3)}/>
    <label>{item.opt3}</label><br/>
    <input type='radio' name={item.qnum} value={item.opt4} onChange={()=>handleChange(item,item.opt4)}/>
    <label>{item.opt4}</label> <br/><br/>
    <button onClick={(e)=> handleSubmit(e,item)}>Submit</button>
    <hr/>
  
    </div>
    );
  
      })}   
      </>
    );
}

export default Data
