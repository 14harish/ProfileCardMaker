import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
 
  return (
    <div className="App">
     <form>
      <label>Profile Photo:</label>
      <input type="file"/><br/>
      <label>Name:</label>
      <input type="text"/><br/>
      <label>Age:</label>
      <input type="text"/><br/>
      <input type="submit" value="submit"/>
     </form>
    </div>
  );
}

export default App;
