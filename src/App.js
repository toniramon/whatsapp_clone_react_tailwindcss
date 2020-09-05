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
          name: "Glen Soto",
          lastMessage: "Style is not all that great.",
        },
        {
          name: "Jace Weir",
          lastMessage: "Style shot the sheriff.",
        },
        {
          name: "Eliott Woodward",
          lastMessage:
            "A shooting star lies ahead, what with the future yet to come.",
        },
        {
          name: "Maci Brett",
          lastMessage:
            "An enigma lies ahead, what with the future yet to come.",
        },
        {
          name: "Waqar Hines",
          lastMessage: "Gasoline lies ahead, what with the future yet to come.",
        },
        {
          name: "Agatha Leal",
          lastMessage: "Style is not all that great.",
        },
        {
          name: "Suzanne Harding",
          lastMessage: "Style shot the sheriff.",
        },
        {
          name: "Earl Whyte",
          lastMessage:
            "A shooting star lies ahead, what with the future yet to come.",
        },
        {
          name: "Ellisha Forbes",
          lastMessage:
            "An enigma lies ahead, what with the future yet to come.",
        },
        {
          name: "Maude Rhodes",
          lastMessage: "Gasoline lies ahead, what with the future yet to come.",
        },
        {
          name: "Ana Beech",
          lastMessage: "Style shot the sheriff.",
        },
        {
          name: "Jaxson Lugo",
          lastMessage:
            "A shooting star lies ahead, what with the future yet to come.",
        },
        {
          name: "Roxanne Pham",
          lastMessage:
            "An enigma lies ahead, what with the future yet to come.",
        },
        {
          name: "Jayden-James Andrew",
          lastMessage: "Gasoline lies ahead, what with the future yet to come.",
        },
      ],
      messages: [
        {
          messageType: "sent",
          text: "Tranquility would scare any linguist away.",
          time: new Date(),
        },
      ],
      botResponses: [
        {
          messageType: "received",
          text: "'The things I do for love.' — Jaime Lannister",
          time: new Date(),
        },
        {
          messageType: "received",
          text:
            "'I have a tender spot in my heart for cripples, bastards and broken things.' — Tyrion",
          time: new Date(),
        },
        {
          messageType: "received",
          text:
            "'When you play the game of thrones, you win or you die.' — Cersei",
          time: new Date(),
        },
        {
          messageType: "received",
          text:
            "'I grew up with soldiers. I learned how to die a long time ago.' — Ned Stark",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "'You know nothing, Jon Snow.' — Ygritte",
          time: new Date(),
        },
        {
          messageType: "received",
          text: "'There's no cure for being a c*nt.' — Bronn",
          time: new Date(),
        },
      ],
    };
  }

  handleMessageChange = (event) => {
    const { value } = event.target;
    this.setState({
      currentMessage: value,
    });
  };

  handleSubmit = (event) => {
    if (this.state.currentMessage.length !== 0) {
      const newMessage = {
        messageType: "sent",
        text: this.state.currentMessage,
        time: new Date(),
      };

      this.state.messages.push(newMessage);
      this.setState({
        currentMessage: "",
      });

      // Call for a random response after one second.
      const botResponse = this.state.botResponses;
      this.state.messages.push(
        botResponse[Math.floor(Math.random() * botResponse.length)]
      );

      // This is not working properly. Expected: show message after 300ms. Problem: message shows only when click any word after that 300ms, not shown instantly.
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
          <h1 className="text-2xl font-semibold m-8"> Whatsapp Clone </h1>{" "}
        </div>{" "}
        <div className="w-9/12 flex flex-row h-128 rounded-lg overflow-hidden shadow-2xl bg-white border border-gray-400">
          <div className="bg-gray-100 w-2/5 h-full relative border-r hidden sm:block">
            <div className="bg-gray-200 flex flex-row p-2 w-full">
              <div className="w-1/2 text-left pt-3 flex flex-row">
                <div className="dot bg-red-500 m-1"> </div>{" "}
                <div className="dot bg-yellow-500 m-1"> </div>{" "}
                <div className="dot bg-green-500 m-1"> </div>{" "}
              </div>{" "}
              <div className="w-1/2 text-right">
                <img
                  src="https://avatars2.githubusercontent.com/u/13649628?s=460&v=4"
                  alt="imagen"
                  className="rounded-full mx-auto h-12 w-12"
                />
              </div>{" "}
            </div>{" "}
            <div className="h-full">
              <SearchBar />
              <Contacts contacts={this.state.contacts} />{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-gray-100 w-full sm:w-3/5 h-full relative">
            <ChatHeader />
            <div className="h-full bg-whatsapp-container">
              <form className="h-full" onSubmit={this.handleSubmit}>
                <ChatMessages messages={this.state.messages} />{" "}
                <ChatInputMessage handleChange={this.handleMessageChange} />{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div>
          <p className="m-8">
            Credits{" "}
            <a
              href="https://github.com/toniramon"
              className="text-indigo-700 font-semibold"
            >
              @xDylaan{" "}
            </a>{" "}
          </p>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
