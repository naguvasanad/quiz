import {  useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";



const Result = () => {

    const[userResult,setUserResult] = useState([]);


const handleView = (e)=>{
    e.preventDefault();
    fetch("http://localhost:5000/getresult",{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            user:JSON.parse( localStorage.getItem("loggedInUser")).userid
        })
    }).then(res=>res.json())
    .then(json=>{
       setUserResult(json);
       
    })
    .catch(err=>alert(err))
}

  return (
    <>
    <div>
      <button onClick={(e)=>handleView(e)}>View</button>
      
      <table className="table table-bordered">
                <tr>
                   <th  scope="col">Qnum</th>
                   <th  scope="col">SelectedAns</th>
                   <th  scope="col">CorrectOpt</th>
                   <th scope="col">Score</th>
                </tr>
                <tbody>
                
      {userResult.map((item,key)=>{
              return(
                <tr key={key}>
                <td>{item.qnum}</td>
                <td>{item.selectedans}</td>
                <td>{item.correctopt}</td>
                <td>{item.selectedans=== item.correctopt?<FaCheck style={{color:"green"}}/>:<IoMdClose style={{color:"red"}}/>}</td>
            </tr>
                  
       );
  })}
      </tbody>
      </table >
    </div>
    </>
  )
}

export default Result
