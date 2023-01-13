import React from 'react';
import Data from './data.json';
import './card.css';
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoBusiness } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { FaIdCardAlt } from "react-icons/fa";




function Card(){
    return(
        <div className='fullCard'>{ 
            Data.map(data => {
                return(
                    <div className='card'>
                        <h1>Professional Card<span id='h1Icon'><FaIdCardAlt/></span></h1>
                        <img src={data.profilePath} width="100px" height="100px"/>  
                        <p><span id='icon'><BsFillPersonFill color='black'/></span>Name:<span id='detail'>{data.name}</span></p>
                        <p><span id='icon'><HiAcademicCap color='black'/></span>Profession:<span id='detail'>{data.profession}</span></p>
                        <p><span id='icon'><RiMailFill color='black'/></span>Email-Id:<span id='detail'>{data.email}</span></p>
                        <p><span id='icon'><IoCall color='black'/></span>Phone-No:<span id='detail'>{data.phoneNo}</span></p>
                        <p><span id='icon'><IoBusiness color='black'/></span>College/Company:<span id='detail'>{data.college}</span></p>
                        <p><span id='icon'><AiFillGithub color='black'/></span>GitHub-Id:<span id='detail'>{data.github}</span></p>
                        <p><span id='icon'><AiFillLinkedin color='black'/></span>linkedin-Id:<span id='detail'>{data.linkedin}</span></p>
                    </div>
                )
        })
         }
        </div>
    )
}
export default Card;