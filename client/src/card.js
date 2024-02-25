import Data from "./data.json";
import React, { useEffect, useState, useRef } from "react";
import * as htmlToImage from "html-to-image";

function Card() {
  const domEl = useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    const link = document.createElement("a");
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
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
    <div class="h-screen w-screen sm:h-screen bg-green-50  dark:bg-gray-900   flex flex-wrap items-center  justify-center  ">
      <div className="fixed top-1 right-1 duration-100 dark:bg-gray-700 bg-green-50 rounded">
        {option?.map((opt) => (
          <button
            key={opt.text}
            onClick={() => {
              setTheme(opt.text);
            }}
            className={`w-10 h-10 leading-9 text-3xl rounded-full m-1 ${
              theme === opt.text && "text-blue-600"
            } `}
          >
            <ion-icon name={opt.icons}></ion-icon>
          </button>
        ))}
        <button
          className="download w-10 h-10 leading-9 text-3xl rounded-full m-1 text-red-500"
          onClick={downloadImage}
        >
          <ion-icon name="cloud-download-sharp"></ion-icon>
        </button>
      </div>

      {Data.map((data) => {
        return (
          <div
            class="max-w-sm sm:max-w-xl border-4 bg-green-100 border-green-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            ref={domEl}
          >
            <div class="h-32 overflow-hidden">
              <img
                class="w-full"
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt=""
              />
            </div>
            <div class="flex justify-center px-5  -mt-12">
              <img
                class="h-32 w-32 dark:bg-gray-800 p-2 rounded-full "
                src={`data:image/${data.format};base64,${data.encode}`}
                alt=""
              />
            </div>
            <div class=" ">
              <div class="text-center px-14">
                <h2 class="text-3xl font-bold">{data.name}</h2>
                <a
                  class="mt-2 dark:hover:text-blue-500"
                  href="https://www.instagram.com/immohitdhiman/"
                  target="BLANK()"
                >
                  @{data.profession}
                </a>
                <p class="mt-2 text-sm">{data.des}, </p>
              </div>
              <table class="text-s mt-2 ml-[10%] mb-2">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-400 dark:text-gray-500 font-semibold">
                      Place
                    </td>
                    <td class="px-2 py-2">{data.college}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-400 dark:text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td class="px-2 py-2">{data.phoneNo}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-400 dark:text-gray-500 font-semibold">
                      Email
                    </td>
                    <td class="px-2 py-2">{data.email}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-400 dark:text-gray-500 font-semibold">
                      Github Id
                    </td>
                    <td class="px-2 py-2">{data.github}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-400 dark:text-gray-500 font-semibold">
                      Linkedin Id
                    </td>
                    <td class="px-2 py-2">{data.linkedin}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
