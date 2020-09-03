import React from "react";

const Contacts = ({ contacts }) => (
  <div className="bg-white pr-4 h-full">
    {contacts.map((contact) => (
      <div key={contact.name} className="flex flex-row pt-1">
        <div className="w-1/5 px-2 py-2">
          <img
            src="https://randomuser.me/api/portraits/women/22.jpg"
            alt="profile"
            className="rounded-full h-10 w-10 m-auto"
          />
        </div>
        <div className="w-4/5 border-b border-gray-300 pt-2 pb-2 leading-tight">
          <span>{contact.name}</span>
          <p className=" text-gray-600 text-sm">{contact.lastMessage}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Contacts;
