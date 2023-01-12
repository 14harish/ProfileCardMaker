import React,{useEffect,useState} from 'react';
import './App.css';
import Axios from 'axios'
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  const  [Username,SetUsername]=useState('');
  const  [file,SetPath]=useState('');
  const  [age,SetAge]=useState('');
  
  const submitReview=()=>{
  // alert("hello");
    Axios.post('http://localhost:8000/insert',{file:file,Username:Username,age:age},{
      headers:{
        "Content-type":"multipart/form-data",
      }
    }).then(()=>{
      alert("Inserted");
    })
  };

  return (
    <div className="App">
     <form encType="multipart/form-data">
      <label>Profile Photo:</label>
      <input type="file" name='file' onChange={(e)=>{
        const file=e.target.files[0];
        console.log(file);
        SetPath(file);
      }}/><br/>
      <label>Name:</label>
      <input type="text" name='Username' onChange={(e)=>{
        SetUsername(e.target.value)}}/><br/>
      <label>Age:</label>
      <input type="text" name='age' onChange={(e)=>{
        SetAge(e.target.value)}}/><br/>
      {/* <input type="submit" value="submit"/> */}
      <Link to="/card"><button onClick={submitReview}>submit</button></Link>
     </form>
    </div>
  );
}

export default App;
