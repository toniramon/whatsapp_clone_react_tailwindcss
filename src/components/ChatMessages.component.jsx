import React from "react";

const ChatMessages = ({ messages }) => (
  <div className="flex flex-col-reverse w-full h-full pb-32 overflow-scroll">
    {messages
      .slice(0)
      .reverse()
      .map((message, index) => (
        <div
          key={index}
          className={
            message.messageType === "sent"
              ? "flex justify-end w-full p-2"
              : "flex justify-start w-full p-2"
          }
        >
          <div
            className={
              message.messageType === "sent"
                ? "bg-sent-message w-2/3 p-2 rounded-lg"
                : "bg-white w-2/3 p-2 rounded-lg"
            }
          >
            <div className="text-left w-full">
              <span>{message.text}</span>
              <span className="float-right pt-2 font-normal text-xs text-gray-600">
                {message.time.getHours() +
                  ":" +
                  (message.time.getMinutes() < 10 ? "0" : "") +
                  message.time.getMinutes()}
              </span>
            </div>
          </div>
        </div>
      ))}
  </div>
);

export default ChatMessages;
