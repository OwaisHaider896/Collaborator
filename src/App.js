import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <div
        className={`${
          hover || active ? `bg-purple-600` : `bg-white-400`
        } shadow-${
          hover ? "2xl" : "lg"
        } w-64 rounded-md p-4 m-6 cursor-pointer`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setActive((prevState) => !prevState)}
      >
        <div className="flex justify-center mb-2">
          <div
            className={`${
              hover || active
                ? "border-white border-2"
                : "border-black border-2"
            } overflow-hidden rounded-full`}
          >
            <img
              className="w-24 h-24"
              src="https://lh3.googleusercontent.com/ogw/ADGmqu8ioXlESvm9_UjXgWDRUnha9RLTwpAp8Pxr5ZBW=s83-c-mo"
              alt="man-pic"
            />
          </div>
        </div>
        <div>
          <h1
            className={`font-bold ${
              hover || active ? `text-white` : `text-black`
            }`}
          >
            Owais Haider
          </h1>
          <p
            className={`${
              hover || active ? `text-white` : `text-gray-600`
            } text-sm`}
          >
            Abc Company
          </p>
        </div>
        <div>
          <button
            className={`${
              hover || active ? `text-white` : `text-purple-800`
            }  mt-2 py-1 px-4 border border-gray-500 rounded`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
