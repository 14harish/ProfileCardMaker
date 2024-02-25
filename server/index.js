// const cors = require("cors");

// const express = require("express");
// const fs = require("fs");
// const multer = require("multer");
// const path = require("path");
// const exp = express();
// const sizeOf = require("image-size");

// const data = fs.readFileSync(path.join(__dirname, "../client/src/data.json"));
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../client/public/upload"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: multer.memoryStorage() });

// exp.use(express.json());
// exp.use(express.urlencoded({ extended: true }));

// exp.use(cors());

// exp.post("/insert", upload.single("file"), (req, res) => {
//   const buffer = req.file.buffer;
//   const base64String = buffer.toString("base64");
//   const fileName = req.file.originalname;
//   const dimensions = sizeOf(req.file.buffer);
//   const format = dimensions.type;

//   console.log(upload);
//   const value = [
//     {
//       profilePath: fileName,
//       name: req.body.Username,
//       profession: req.body.profession,
//       email: req.body.email,
//       phoneNo: req.body.phoneNo,
//       github: req.body.github,
//       linkedin: req.body.linkedin,
//       college: req.body.college,
//       encode: base64String,
//       format: format,
//       des: req.body.des,
//     },
//   ];
//   //   console.log(value);
//   const val = JSON.stringify(value);
//   fs.writeFileSync(
//     path.join(__dirname, "../client/src/data.json"),
//     val,
//     (err) => {
//       if (err) throw err;
//       console.log("data added");
//     }
//   );

//   res.send(value);
// });

// const PORT = process.env.PORT || 8000;

// exp.listen(PORT, () => {
//   console.log(`Connected with Server on port ${PORT}`);
// });
const cors = require("cors");
const express = require("express");
const fs = require("fs").promises; // Use fs.promises for async file operations
const multer = require("multer");
const path = require("path");
const sizeOf = require("image-size");

const exp = express();

const dataFilePath = path.join(__dirname, "../client/src/data.json");

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

exp.post("/insert", upload.single("file"), async (req, res) => {
  try {
    // Read existing data from the file
    const existingData = await fs.readFile(dataFilePath, "utf-8");
    const jsonData = JSON.parse(existingData);

    const buffer = req.file.buffer;
    const base64String = buffer.toString("base64");
    const fileName = req.file.originalname;
    const dimensions = sizeOf(req.file.buffer);
    const format = dimensions.type;

    const newEntry = {
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
    };

    // Add the new entry to the existing data
    jsonData.push(newEntry);

    // Write the updated data back to the file
    await fs.writeFile(dataFilePath, JSON.stringify(jsonData));

    res.send(jsonData); // Send the updated data as the response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 8000;

exp.listen(PORT, () => {
  console.log(`Connected with Server on port ${PORT}`);
});
