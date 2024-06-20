import React from "react";

import { FaArrowRight } from "react-icons/fa6";

function Main() {
  return (
    <div
      name="main"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I&apos;m a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            atque molestias eum sint illo commodi nisi reiciendis ea eveniet
            temporibus dicta, error, adipisci sunt numquam itaque, quisquam
            exercitationem magnam ipsa!
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={18} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>{/* <img /> */}</div>
      </div>
    </div>
  );
}

export default Main;
