import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const [backendData,setBackendData]=useState([{}]);
useEffect(()=>{
  fetch("/").then(
    response=>response.json()
  ).then(data=>{
    setBackendData(data);
  })
})
root.render(
  <div>{(typeof backendData.user==='undefined')?(
<p>Loading...</p>):(backendData.user.map((user,i)=>{
  <p></p>
}))
}
</div>
);