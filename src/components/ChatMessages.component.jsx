import React from "react";

const ChatMessages = ({ messages }) => (
  <div className="flex flex-col-reverse w-full h-full pb-32">
    {messages
      .slice(0)
      .reverse()
      .map((message) => (
        <div
          key={message.time}
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
              {message.text},{" "}
              {message.time.getHours() +
                ":" +
                (message.time.getMinutes() < 10 ? "0" : "") +
                message.time.getMinutes()}
            </div>
          </div>
        </div>
      ))}
  </div>
);

export default ChatMessages;
