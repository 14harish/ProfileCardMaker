import React from 'react';
import Data from './data.json';
import './card.css';

function Card(){
    return(
        <div className='fullCard'>{
            Data.map(data => {
                return(
                    <div className='card'>
                        <img src={data.profilePath} width="100px" height="100px"/>  
                        <p>Name:{data.name}</p>
                        <p>Profession:{data.profession}</p>
                        <p>Email-Id:{data.email}</p>
                        <p>Phone-No:{data.phoneNo}</p>
                        <p>College/Company:{data.college}</p>
                        <p>GitHub-Id:{data.github}</p>
                        <p>linkedin-Id:{data.linkedin}</p>
                    </div>
                )
        })
         }
        </div>
    )
}
export default Card;