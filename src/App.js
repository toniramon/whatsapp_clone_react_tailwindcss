import React from "react";
import "./App.css";
// import logo from "./logo.svg";
import palette from "./assets/img/palette.jpg";

function App() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-gray-100"
      // style={{ backgroundImage: `url(${palette})` }}
    >
      <div>
        <h1 className="text-2xl font-semibold m-8">Whatsapp Clone</h1>
      </div>
      <div className="w-9/12 flex flex-row h-128 rounded-lg overflow-hidden shadow-2xl bg-white border border-gray-400">
        <div className="bg-gray-100 w-2/5 h-full">
          <div className="bg-gray-200 p-4">header</div>
          <div className="p-4">
            <div>mini-search</div>
            <div>chats</div>
          </div>
        </div>
        <div className="bg-gray-100 w-3/5 h-full">
          <div className="bg-gray-200 p-4">header</div>
          <div
            className="p-4 h-full"
            style={{ backgroundImage: `url(${palette})` }}
          >
            <div>chat</div>
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
