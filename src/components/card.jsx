import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para,hover=""}) {
  return (
    <div className={` p-5 rounded-xl shadow shadow-zinc-400 bg-zinc-800 min-h-[25rem] hover:${hover} flex flex-col justify-between text-zinc-100 ${width}`}>
      <div className="w-full">
        {" "}
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium">WhatEver Heading</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            {" "}
            <h1 className="text-6xl font-semibold tracking-tighter leading-none">
              Start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact-Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
