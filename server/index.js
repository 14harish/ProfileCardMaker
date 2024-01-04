// const { json } = require('body-parser');
// const express=require('express');
// const fs=require('fs');
// const body_parser=require('body-parser');
// const cors=require('cors');
// const multer =require('multer');
// const exp=express();


// const data=fs.readFileSync("../client/src/data.json");
// // const myValue=JSON.parse(data);
// exp.use(cors());
// exp.use(express.json());
// exp.use(body_parser.urlencoded({extended:true}));

// // myValue.push(value);
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'../client/public/upload')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname);
//     }
// })
// exp.use(express.static(__dirname + '../client/public/upload'));
// exp.use('../client/src/image', express.static('image'));

// const upload=multer({
// //    dest:'../client/src/image',
// storage:storage
// });



// exp.post("/insert",upload.single("file"),(req,res)=>{
//     const file="upload/"+req.file.originalname;
//     console.log(file);
//     let value=[{
//         profilePath:file,
//         name:req.body.Username,
//         profession:req.body.profession,
//         email:req.body.email,
//         phoneNo:req.body.phoneNo,
//         github:req.body.github,
//         linkedin:req.body.linkedin,
//         college:req.body.college,
//     }];
//     const val=JSON.stringify(value);
//     fs.writeFileSync("../client/src/data.json",val,(err)=>{
//         if (err) throw err;
//         console.log("data added");
//     })
//     res.send(value);
// })


// exp.listen(8000,(req,res)=>{
//     console.log("Connected with Server");
// })
const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const exp = express();

const data = fs.readFileSync(path.join(__dirname, '../client/src/data.json'));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../client/public/upload'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));

exp.use(cors());

exp.post("/insert", upload.single("file"), (req, res) => {
    const file = 'upload/' + req.file.originalname;
    console.log(file);

    const value = [{
        profilePath: file,
        name: req.body.Username,
        profession: req.body.profession,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        github: req.body.github,
        linkedin: req.body.linkedin,
        college: req.body.college,
    }];

    const val = JSON.stringify(value);
    fs.writeFileSync(path.join(__dirname, '../client/src/data.json'), val, (err) => {
        if (err) throw err;
        console.log("data added");
    });

    res.send(value);
});

const PORT = process.env.PORT || 8000;

exp.listen(PORT, () => {
    console.log(`Connected with Server on port ${PORT}`);
});
