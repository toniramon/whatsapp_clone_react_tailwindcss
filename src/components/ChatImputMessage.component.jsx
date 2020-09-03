import React from "react";

const ChatImputMessage = () => (
  <div className="absolute flex flex-row bottom-0 w-full bg-gray-100 h-14">
    <div className="w-2/12 p-4 flex justify-center">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="emoji-happy text-gray-400 w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="w-8/12">
      <div className="pt-3">
        <input
          className="shadow-xs appearance-none font-light rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          placeholder="Type a message"
        ></input>
      </div>
    </div>
    <div className="w-2/12 p-4 flex justify-center">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="microphone text-gray-400 w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);

export default ChatImputMessage;
