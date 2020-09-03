import React from "react";
import "./App.css";

import Contacts from "./components/Contacts.component";
import SearchBar from "./components/SearchBar.component";
import ChatHeader from "./components/ChatHeader.component";
import ChatInputMessage from "./components/ChatInputMessage.component";
import ChatMessages from "./components/ChatMessages.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMessage: "",
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
      ],
      messages: [
        {
          messageType: "sent",
          text: "Mensaje enviado por toni",
          time: new Date(),
        },
      ],
      botResponses: [
        {
          messageType: "received",
          text: "random message 1",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "random message 2",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "random message 3",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "random message 4",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "random message 5",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "random message 6",
          time: new Date(),
        },
      ],
    };
  }

  handleMessageChange = (event) => {
    const { value } = event.target;
    this.setState({ currentMessage: value });
  };

  handleSubmit = (event) => {
    if (this.state.currentMessage.length !== 0) {
      const newMessage = {
        messageType: "sent",
        text: this.state.currentMessage,
        time: new Date(),
      };

      this.state.messages.push(newMessage);
      this.setState({ currentMessage: "" });

      // Call for a random response after one second.
      const botResponse = this.state.botResponses;
      this.state.messages.push(
        botResponse[Math.floor(Math.random() * botResponse.length)]
      );

      // setTimeout(() => {
      //   this.state.messages.push(
      //     botResponse[Math.floor(Math.random() * botResponse.length)]
      //   );
      // }, 300);
      event.target.reset();
    }

    event.preventDefault();
  };

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
              <form className="h-full" onSubmit={this.handleSubmit}>
                <ChatMessages messages={this.state.messages} />
                <ChatInputMessage handleChange={this.handleMessageChange} />
              </form>
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
