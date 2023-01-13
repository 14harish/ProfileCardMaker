import React from 'react';
import Data from './data.json';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


function Card(){
    return(
        <div className='fullCard'>{ 
            Data.map(data => {
                return(
                    <div className='card'>
                        <h1>Professional Card</h1>
                        <img src={data.profilePath} width="100px" height="100px"/>  
                        <p>Name:<span>{data.name}</span></p>
                        <p>Profession:     <span>{data.profession}</span></p>
                        <p>Email-Id:       <span>{data.email}</span></p>
                        <p>Phone-No:       <span>{data.phoneNo}</span></p>
                        <p>College/Company:<span>{data.college}</span></p>
                        <p>GitHub-Id:      <span>{data.github}</span></p>
                        <p>linkedin-Id:    <span>{data.linkedin}</span></p>
                    </div>
                )
        })
         }
        </div>
    )
}
export default Card;