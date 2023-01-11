const { json } = require('body-parser');
const express=require('express');
const fs=require('fs');
const body_parser=require('body-parser');
const cors=require('cors');
const exp=express();

const data=fs.readFileSync("data.json");
// const myValue=JSON.parse(data);
exp.use(cors());
exp.use(express.json());
exp.use(body_parser.urlencoded({extended:true}));

// myValue.push(value);


exp.post("/insert",(req,res)=>{
    let value={
        profilePath:req.body.path,
        name:req.body.Username,
        age:req.body.age,
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