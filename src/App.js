import React from "react";
import logo from "./logo.svg";
import "./App.css";
import palette from "./assets/img/palette.jpg";

function App() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${palette})` }}
    >
      <div className="w-9/12 h-128 rounded overflow-hidden shadow-lg p-4 bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> React-Tailwind </div>
          <p className="text-gray-700 text-base">
            A React Starter with Tailwind CSS3
          </p>
        </div>
        <div className="px-6 py-4">
          {["React", "Tailwind", "Test"].map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
            >
              {"#" + tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
