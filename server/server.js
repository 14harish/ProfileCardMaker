const { json } = require('body-parser');
const express=require('express');
const fs=require('fs');
const body_parser=require('body-parser');
const cors=require('cors');
const multer =require('multer');
const exp=express();


const data=fs.readFileSync("../client/src/data.json");
// const myValue=JSON.parse(data);
exp.use(cors());
exp.use(express.json());
exp.use(body_parser.urlencoded({extended:true}));

// myValue.push(value);
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../client/src/image')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload=multer({
   dest:'../client/src/image',
});



exp.post("/insert",upload.single("file"),(req,res)=>{
    const file=req.file.path;
    console.log(file);
    let value={
        profilePath:file,
        name:req.body.Username,
        age:req.body.age,
    }
    const val=JSON.stringify(value);
    fs.writeFileSync("../client/src/data.json",val,(err)=>{
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