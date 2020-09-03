import React from "react";
import "./App.css";

import Contacts from "./components/Contacts.component";
import SearchBar from "./components/SearchBar.component";
import ChatHeader from "./components/ChatHeader.component";
import ChatInputMessage from "./components/ChatImputMessage.component";
import ChatMessages from "./components/ChatMessages.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          name: "Bea",
          lastMessage: "Soy una nini",
        },
        {
          name: "Sandra",
          lastMessage: "te debo una cerveza",
        },
        {
          name: "Valensito",
          lastMessage: "Eres el puto amo nene",
        },
        {
          name: "Sister",
          lastMessage: "Es como un hermano para mi",
        },
        {
          name: "Rubypauly",
          lastMessage: "He vist un patito!!",
        },
        {
          name: "Magda Kraków",
          lastMessage: "Now I'm curious!",
        },
        {
          name: "Mama",
          lastMessage: "per favor, escura!!",
        },
      ],
      messages: [
        {
          messageType: "sent",
          text: "Mensaje enviado por toni",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "Respuesta Sandrita",
          time: new Date(),
        },
        {
          messageType: "sent",
          text: "ajsduiasdhjasudshadjksa",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "toni eres el puto amo!!",
          time: new Date(),
        },
        {
          messageType: "sent",
          text: "hola mama",
          time: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <div>
          <h1 className="text-2xl font-semibold m-8">Whatsapp Clone</h1>
        </div>
        <div className="w-9/12 flex flex-row h-128 rounded-lg overflow-hidden shadow-2xl bg-white border border-gray-400">
          <div className="bg-gray-100 w-2/5 h-full relative border-r hidden sm:block">
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
              <SearchBar />
              <Contacts contacts={this.state.contacts} />
            </div>
          </div>
          <div className="bg-gray-100 w-full sm:w-3/5 h-full relative">
            <ChatHeader />
            <div className="h-full bg-whatsapp-container">
              <ChatMessages messages={this.state.messages} />
              <ChatInputMessage />
            </div>
          </div>
        </div>
        <div>
          <p className="m-8">
            Credits{" "}
            <a
              href="https://github.com/toniramon"
              className="text-indigo-700 font-semibold"
            >
              @xDylaan
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
