import React from "react";

const SearchBar = () => (
  <div className="p-4 border-b border-gray-300">
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
);

export default SearchBar;
