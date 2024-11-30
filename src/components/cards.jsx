import React from "react";
import Card from "./card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto  flex gap-2 py-10 px-20">
        <Card width={"basis-1/3"} start={false} para={true}/>
        <Card width={"basis-2/3"} start={true} para={false} hover={"bg-violet-600"}/>
      </div>
    </div>
  );
}

export default Cards;
