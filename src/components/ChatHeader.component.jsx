import React from "react";

const ChatHeader = () => (
  <div className="bg-gray-200 flex flex-row p-2">
    <div className="flex flex-row w-1/2">
      <img
        src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
        alt="imagen"
        className="rounded-full h-12 w-12 ml-4"
      />
      <span className="pt-2 ml-4 text-lg text-left">Sandrita FP</span>
    </div>
    <div className="flex flex-row w-1/2 justify-end pr-4">
      <div className="p-2">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="search w-6 h-6 text-gray-600"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="p-2">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="search w-6 h-6 text-gray-600"
        >
          <path
            fillRule="evenodd"
            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="p-2">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="search w-6 h-6 text-gray-600"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default ChatHeader;
