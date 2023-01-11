const express=require('express');

const exp=express();

exp.use("/api",(req,res)=>{
    res.json({"users":["user1","user2"]});
})

exp.listen(8000,(req,res)=>{
    console.log("Connected with Server");
})