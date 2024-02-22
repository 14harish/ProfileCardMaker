import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  const [Username, SetUsername] = useState("");
  const [file, SetPath] = useState("");
  const [profession, SetProfession] = useState("");
  const [email, SetEmail] = useState("");
  const [phoneNo, SetphoneNo] = useState("");
  const [github, Setgithub] = useState("");
  const [linkedin, SetLinkedin] = useState("");
  const [college, SetCollege] = useState("");

  const submitReview = () => {
    // alert("hello");
    Axios.post(
      "http://localhost:8000/insert",
      {
        file: file,
        Username: Username,
        profession: profession,
        email: email,
        phoneNo: phoneNo,
        github: github,
        linkedin: linkedin,
        college: college,
      },
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    ).then(() => {
      alert("Inserted");
    });
  };

  return (
    <div className="App">
      <div className="container">
        <form className="formData">
          <h1>Detail</h1>
          <label>Name:</label>
          <input
            type="text"
            name="Username"
            onChange={(e) => {
              SetUsername(e.target.value);
            }}
          />
          <br />

          <label>Profession:</label>
          <input
            type="text"
            name="profession"
            onChange={(e) => {
              SetProfession(e.target.value);
            }}
          />
          <br />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
          />
          <br />

          <label>Phone-No:</label>
          <input
            type="text"
            name="phoneNo"
            onChange={(e) => {
              SetphoneNo(e.target.value);
            }}
          />
          <br />

          <label>College/Company:</label>
          <input
            type="text"
            name="college"
            onChange={(e) => {
              SetCollege(e.target.value);
            }}
          />
          <br />

          <label>GitHub Id:</label>
          <input
            type="text"
            name="github"
            onChange={(e) => {
              Setgithub(e.target.value);
            }}
          />
          <br />

          <label>Linkedin Id:</label>
          <input
            type="text"
            name="linkedin"
            onChange={(e) => {
              SetLinkedin(e.target.value);
            }}
          />
          <br />

          <label>Profile Photo:</label>
          <input
            type="file"
            name="file"
            className="profile"
            onChange={(e) => {
              const file = e.target.files[0];
              console.log(file);
              SetPath(file);
            }}
          />
          <br />

          <Link to="/card">
            <button className="btn" onClick={submitReview}>
              Upload
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default App;
