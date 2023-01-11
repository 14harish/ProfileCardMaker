import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const  [Username,SetUsername]=useState('');
  const  [path,SetPath]=useState('');
  const  [age,SetAge]=useState('');

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
      <input type="submit" value="submit"/>
     </form>
    </div>
  );
}

export default App;
