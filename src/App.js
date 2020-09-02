import React from "react";
import "./App.css";
// import logo from "./logo.svg";
import palette from "./assets/img/palette.jpg";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div>
        <h1 className="text-2xl font-semibold m-8">Whatsapp Clone</h1>
      </div>
      <div className="w-9/12 flex flex-row h-128 rounded-lg overflow-hidden shadow-2xl bg-white border border-gray-400">
        <div className="bg-gray-100 w-2/5 h-full relative border-r">
          <div className="bg-gray-200 flex flex-row p-2 w-full">
            <div className="w-1/2 text-left pt-3 flex flex-row">
              <div className="dot bg-red-500 m-1"></div>
              <div className="dot bg-yellow-500 m-1"></div>
              <div className="dot bg-green-500 m-1"></div>
            </div>
            <div className="w-1/2 text-right">
              <img
                src="https://avatars2.githubusercontent.com/u/13649628?s=460&v=4"
                alt="imagen"
                className="rounded-full mx-auto h-12 w-12"
              />
            </div>
          </div>
          <div className="h-full">
            <div className="p-4">
              <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                <div class="flex -mr-px">
                  <span class="flex rounded-full items-center leading-normal text-gray-400 bg-white rounded-r-none px-3 whitespace-no-wrap">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="search w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light px-3 relative"
                />
              </div>
            </div>
            <div className="bg-white p-4 h-full">sdhfjkdsfhdsjkfhdsfjkdsf</div>
          </div>
        </div>
        <div className="bg-gray-100 w-3/5 h-full relative">
          <div className="bg-gray-200 p-4">header</div>
          <div
            className="h-full"
            style={{ backgroundImage: `url(${palette})` }}
          >
            <div className="p-4">Hey, stop messaging me!</div>
            <div className="absolute flex flex-row bottom-0 w-full bg-gray-100 h-14">
              <div className="w-2/12 pt-4 text-center">
                {" "}
                <span role="img" aria-label="emoji" className="h-1">
                  &#128515;
                </span>
              </div>
              <div className="w-10/12">
                <div className="pt-3">
                  <input
                    className="shadow-xs appearance-none font-light rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Type a message"
                  ></input>
                </div>
              </div>
              <div className="w-2/12 pt-4 text-center">
                {" "}
                <span role="img" aria-label="emoji" className="h-1">
                  &#127908;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="m-8">Credits @xDylaan</p>
      </div>
    </div>
  );
}

export default App;
