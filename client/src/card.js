import React from 'react';
import Data from './data.json';
// import Value from './image';
// import pic from `./image/`+data.profilePath
// import img from './harish.jpeg'
// import img from './image'
function Card(){
    // console.log("Links "+data.profilePath);
    return(
        <div>{
            Data.map(data => {
                return(
                    <div>
                        <img src={data.profilePath}/>  
                        <p>Name:{data.name}</p>
                    </div>
                )
        })
    }
        </div>
    )
}
export default Card;