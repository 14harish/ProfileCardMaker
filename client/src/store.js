import React from "react";
import Data from './data.json'

const Value=Data.map(data => {
    return(
        <div>
            <img src="image/avatar.jpeg"/>  
            <p>data.name</p>
        </div>
    )
})
export default Value;