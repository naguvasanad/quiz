import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const Home = () => {

    const handleTest = (e)=>{
      e.preventDefault();
      window.location.href= "/Data";
    }

    const handleResult = (e)=>{
        e.preventDefault();
        window.location.href="/Result"
    }
    //  fetch("http://localhost:5000/selectedAnswers",
    //  {
    //   method:"post",
    //   headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify({
    //     user:JSON.parse( localStorage.getItem("loggedInUser")).userid
    //   })
    //  }).then(res=>res.json())
    //  .then(json=>alert("hi"))
    //   .catch(err=>console.log(err))
    //  }    

    //     window.location.href="/Result"      
    
    

  return (
    <>
    
      <h2>This is Online Quiz Website...</h2>
          <p style={{float:"right"}}> <Header  /> </p>
    <div>
        <button className='btn btn-primary' onClick={(e)=>handleTest(e)}>Start Test</button> &nbsp;&nbsp;
        <button className='btn btn-info' onClick={(e)=>handleResult(e)}>Result</button>
    </div>
    
    </>
  )
  }

export default Home
