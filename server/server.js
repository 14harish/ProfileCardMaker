const express=require('express');

const exp=express();

exp.use("/api",(req,res)=>{
    res.json({'user':[user1]});
})

exp.listen(8000,(req,res)=>{
    console.log("Connected with Server");
})