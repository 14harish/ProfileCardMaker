import React,{useEffect,useState} from 'react';
import './App.css';
import Axios from 'axios'
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  const  [Username,SetUsername]=useState('');
  const  [path,SetPath]=useState('');
  const  [age,SetAge]=useState('');
  
  const submitReview=()=>{
  // alert("hello");

    Axios.post('http://localhost:8000/insert',{path:path,Username:Username,age:age}).then(()=>{
      alert("Inserted");
    })
  };
  return (
    <div className="App">
     <form>
      <label>Profile Photo:</label>
      <input type="file" name='path' onChange={(e)=>{
        SetPath(e.target.value)
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
