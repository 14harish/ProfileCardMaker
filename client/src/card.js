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
                    </div>
                )
        })
         }
        </div>
    )
}
export default Card;