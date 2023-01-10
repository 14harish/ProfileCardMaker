import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='formDiv'>
   <form>
    <h1>Details</h1>
    <label>Profile Photo:</label>
    <input type="file"/><br/>
   <label>Name:</label>
   <input type="text"/><br/>
   <label>Age:</label>
   <input type="name"/><br/>
   <label>LinkedIn Profile</label>
    <input type="text"/><br/>
    <label>GitHub Profile</label>
    <input type="text"/><br/>
   </form>
   </div>
  </>
);