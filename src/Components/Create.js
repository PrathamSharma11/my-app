import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
const Create = () => { //rafce
    const[name,setName] = useState("")     //setName is use to update the state
    const [email,setEmail] = useState("");
    const history = useNavigate();
    const header = {"Access-Control-Allow-Origin":"*"};
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("clicked");
        axios.post("https://656aa9b9dac3630cf727371b.mockapi.io/react_curd",{
            name:name,
            email:email,
            header, 
        })
        .then(()=>{
            history("/read");

        });
        

    };
  return (
  <>
   <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
  <h2>CREATE</h2>
  <form>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" 
      onChange={(e)=>setName(e.target.value)}  
    />
  </div>




  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" 
     onChange={(e)=>setEmail(e.target.value)}   
    />
    
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>

  </>
  );
};

export default Create