import React from "react";
import Button from "./button";

function Product({ data }) {
  return (
    <div className="w-full py-20  text-zinc-100 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">{data.title}</h1>
        <div className="w-1/3">
          <p className="mb-10 ">{data.description}</p>
          <div className="text-black flex gap-10">
            {
              data.live && (<Button/>)
              
            }
            {
              data.case && (<Button title="Case Study"/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
