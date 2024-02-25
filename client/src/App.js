import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import Register from "./assests/Register.svg";

function App() {
  const [Username, SetUsername] = useState("");
  const [file, SetPath] = useState("");
  const [profession, SetProfession] = useState("");
  const [email, SetEmail] = useState("");
  const [phoneNo, SetphoneNo] = useState("");
  const [github, Setgithub] = useState("");
  const [linkedin, SetLinkedin] = useState("");
  const [college, SetCollege] = useState("");
  const [des, Setdes] = useState("");
  const Navigate = useNavigate();
  const submitReview = () => {
    if (
      Username !== "" &&
      profession !== "" &&
      email !== "" &&
      phoneNo !== "" &&
      github !== "" &&
      linkedin !== "" &&
      college !== "" &&
      des
    ) {
      console.log("dhe");
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
          des: des,
        },
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      Navigate("/card");
    } else {
      alert("Fill the form");
    }
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  const element = document.documentElement;
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();
  const option = [
    {
      icons: "sunny",
      text: "light",
    },
    {
      icons: "moon",
      text: "dark",
    },
    {
      icons: "desktop-outline",
      text: "system",
    },
  ];
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme,element.classList]);
  return (
    <div className="dark:bg-gray-900 bg-gray-300 h-screen sm:h-screen dark:text-white text-black">
      <div className="fixed right-1 duration-100 dark:bg-gray-800 bg-gray-300 rounded">
        {option?.map((opt) => (
          <button
            key={opt.text}
            onClick={() => {
              setTheme(opt.text);
            }}
            className={`w-10 h-10 leading-9 text-3xl rounded-full m-1 ${
              theme === opt.text && "text-blue-600"
            }`}
          >
            <ion-icon name={opt.icons}></ion-icon>
          </button>
        ))}
      </div>
      <div className="sm:flex sm:p-6 pt-32">
        <form className="mx-3 sm:mx-8 sm:p-7 p-6 bg-gray-200 border-4 dark:border-0 border-green-300 text-green-900 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg max-w-2xl">
          <h1 className=" text-xl sm:text-3xl font-semibold mb-6">
            Add a Profile Card Detail
          </h1>

          <div className="flex">
            <div className="sm:mb-6 mb-2">
              <label className="block mb-2 text-sm sm:text-xl font-medium">
                Name
              </label>
              <input
                type="text"
                name="Username"
                className="input-field mr-6 w-36 sm:w-72 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => SetUsername(e.target.value)}
                required
                placeholder="Ex: @Harish V"
              />
            </div>
            <div className="sm:mb-6 mb-2">
              <label className="block mb-2 text-sm sm:text-xl font-medium">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                className="input-field mr-6 w-36 sm:w-72 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => SetProfession(e.target.value)}
                required
                placeholder="Ex: @student"
              />
            </div>
          </div>
          <div className="flex">
            <div className="sm:mb-6 mb-2">
              <label className="block mb-2 text-sm sm:text-xl font-medium ">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input-field mr-6 w-36 sm:w-72 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => SetEmail(e.target.value)}
                required
                placeholder="Ex: harish@gmail.com"
              />
            </div>

            <div className="sm:mb-6 mb-2">
              <label className="block mb-2 text-sm sm:text-xl font-medium">
                Phone No
              </label>
              <input
                type="number"
                name="phoneNo"
                className="input-field mr-6 w-36 sm:w-72 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => SetphoneNo(e.target.value)}
                required
                placeholder="Ex: @123456789"
              />
            </div>
          </div>
          <div className="sm:mb-6 mb-2">
            <label className="block mb-2 text-sm sm:text-xl font-medium">
              Place
            </label>
            <input
              type="text"
              name="college"
              className="input-field mr-6 w-[100%] sm:w-[100%] bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => SetCollege(e.target.value)}
              placeholder="Ex: @Salem"
            />
          </div>

          <div className="flex">
            <div className="sm:mb-6 mb-2">
              <label className="block mb-2 text-sm sm:text-xl font-medium">
                GitHub Id
              </label>
              <input
                type="url"
                name="github"
                className="input-field mr-6 w-32 sm:w-72 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => Setgithub(e.target.value)}
                placeholder="Ex: @githubid"
              />
            </div>

            <div className="sm:mb-6 mb-2">
              <label className="block mb-2 text-sm sm:text-xl font-medium">
                Linkedin Id
              </label>
              <input
                type="url"
                name="linkedin"
                className="input-field mr-6 w-40 sm:w-72 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => SetLinkedin(e.target.value)}
                placeholder="Ex: @linkedinid"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-6">
              <label className="block mb-2 text-sm sm:text-xl font-medium">
                Profile photo
              </label>
              <div className="flex items-center space-x-4">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer mr-6 w-32 sm:w-72 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                >
                  Upload a file
                </label>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={(e) => SetPath(e.target.files[0])}
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
            <div className="sm:mb-6 mb-2">
              <label className="block mb-2 text-sm sm:text-xl font-medium">
                Describe YourSelf
              </label>

              <textarea
                rows="4"
                cols="50"
                placeholder="Enter your text here..."
                className="input-field mr-6 w-40 sm:w-72 bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => Setdes(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* <input
            type="file"
            name="file"
            className="profile hidden"
            onChange={(e) => SetPath(e.target.files[0])}
            required
          /> */}
          <div className="flex justify-center align-middle">
            <button
              type="submit"
              onClick={submitReview}
              class="text-white bg-blue-700  hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Upload
            </button>
          </div>
        </form>
        <img
          src={Register}
          className=" hidden mg:flex justify-start h-2/3 md:w-1/2 md:block"
          alt="Animated GIF"
        />
      </div>
    </div>
  );
}

export default App;
