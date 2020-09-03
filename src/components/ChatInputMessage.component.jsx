import React from "react";

class ChatInputMessage extends React.Component {
  handleInputChange = (event) => {
    this.props.handleChange(event);
  };

  render() {
    return (
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
              id="currentMessage"
              placeholder="Type a message"
              onChange={this.handleInputChange}
              name="message"
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
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default ChatInputMessage;
