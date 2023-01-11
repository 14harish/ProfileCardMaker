const { json } = require('body-parser');
const express=require('express');
const fs=require('fs');

const exp=express();

const data=fs.readFileSync("data.json");
// const myValue=JSON.parse(data);


// myValue.push(value);

exp.get("/",(req,res)=>{
    let value={
        profilePath:path,
        name:Username,
        age:age,
    }
    const val=JSON.stringify(value);
    fs.writeFileSync("data.json",val,(err)=>{
        if (err) throw err;
        console.log("data added");
    })
    res.send(value);
})

// exp.use("/api",(req,res)=>{
//     res.json({"users":["user1","user2"]});
// })

exp.listen(8000,(req,res)=>{
    console.log("Connected with Server");
})