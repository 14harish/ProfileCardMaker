const cors = require("cors");

const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const exp = express();
const sizeOf = require("image-size");

const data = fs.readFileSync(path.join(__dirname, "../client/src/data.json"));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../client/public/upload"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multer.memoryStorage() });

exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));

exp.use(cors());

exp.post("/insert", upload.single("file"), (req, res) => {
  const buffer = req.file.buffer;
  const base64String = buffer.toString("base64");
  const fileName = req.file.originalname;
  const dimensions = sizeOf(req.file.buffer);
  const format = dimensions.type;

  // console.log(upload);
  const value = [
    {
      profilePath: fileName,
      name: req.body.Username,
      profession: req.body.profession,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      github: req.body.github,
      linkedin: req.body.linkedin,
      college: req.body.college,
      encode: base64String,
      format: format,
      des: req.body.des,
    },
  ];
  console.log(value);
  // const val = JSON.stringify(value);
  // fs.writeFileSync(
  //   path.join(__dirname, "../client/src/data.json"),
  //   val,
  //   (err) => {
  //     if (err) throw err;
  //     console.log("data added");
  //   }
  // );

  res.send(value);
});

const PORT = process.env.PORT || 8000;

exp.listen(PORT, () => {
  console.log(`Connected with Server on port ${PORT}`);
});
