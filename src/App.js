import React from "react";
import "./App.css";
// import logo from "./logo.svg";
import palette from "./assets/img/palette.jpg";

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
      ],
      messages: [],
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
              <div className="p-4">
                <div className="flex flex-wrap items-stretch w-full relative">
                  <div className="flex -mr-px">
                    <span className="flex rounded-full items-center leading-normal text-gray-600 bg-white rounded-r-none px-3 whitespace-no-wrap">
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
                    </span>
                  </div>
                  <input
                    type="text"
                    className="flex-shrink flex-grow flex-auto focus:outline-none leading-normal w-px h-10 px-3 relative rounded-full rounded-l-none"
                    placeholder="Search or start new chat"
                  />
                </div>
              </div>
              <div className="bg-white pt-2 pr-4 h-full">
                {this.state.contacts.map((contact) => (
                  <div key={contact.name} className="flex flex-row">
                    <div className="w-1/5 px-2 py-2">
                      <img
                        src="https://randomuser.me/api/portraits/women/22.jpg"
                        alt="profile"
                        className="rounded-full h-10 w-10 m-auto"
                      />
                    </div>
                    <div className="w-4/5 border-b border-gray-300 pt-2 leading-tight">
                      <span>{contact.name}</span>
                      <p className=" text-gray-600 text-sm">
                        {contact.lastMessage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-full sm:w-3/5 h-full relative">
            <div className="bg-gray-200 flex flex-row p-2">
              <div className="flex flex-row w-1/2 text-left">
                <img
                  src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="imagen"
                  className="rounded-full h-12 w-12 ml-4"
                />
                <span className="pt-2 ml-4 text-lg text-left">John Doe</span>
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
            <div
              className="h-full"
              style={{ backgroundImage: `url(${palette})` }}
            >
              <div className="flex flex-col-reverse w-full">
                <div>Message 1</div>
                <div>Message 2</div>
                <div>Message 3</div>
                <div>Message 4</div>
                <div>Message 5</div>
              </div>
              <div className="absolute flex flex-row bottom-0 w-full bg-gray-100 h-14">
                <div className="w-2/12 p-4 text-center">
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
                <div className="w-2/12 p-4 text-center">
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
            </div>
          </div>
        </div>
        <div>
          <p className="m-8">Credits @xDylaan</p>
        </div>
      </div>
    );
  }
}

export default App;
