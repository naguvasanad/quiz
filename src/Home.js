import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const handleTest = (e)=>{
      e.preventDefault();
      window.location.href= "/Data";
    }
    const handleResult = (e)=>{
        e.preventDefault();
        window.location.href="/Result"      
        
    }

  return (
    <>
    <div>
      <h2>This is Online Quiz Website...</h2>
    </div>
    <div>
        <button className='btn btn-primary' onClick={(e)=>handleTest(e)}>Start Test</button> &nbsp;&nbsp;
        <button className='btn btn-info' onClick={(e)=>handleResult(e)}>Result</button>
    </div>
    
    </>
  )
}

export default Home
