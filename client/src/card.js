import React from 'react';
import data from './data.json';
// import pic from `./image/`+data.profilePath
// import img from './harish.jpeg'
// import img from './image'
function Card(){
    console.log("Links "+data.profilePath);
    return(<>
    
    <img src={data.profilePath} alt="hello"></img>
    {/* <img src={process.env.PUBLIC_URL+"./harish.jpeg"} /> */}
        {/* <img src={pic} /> */}
    <p>Name:{data.name}</p>
    <p>Age:{data.age}</p>
    </>)
}
export default Card;