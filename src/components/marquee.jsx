import React from "react";

function Marquee({ urls,cName }) {
  return (
    <div className="flex w-full py-8 overflow-hidden ">
      <div className={`flex flex-shrink-0 gap-20 py-5 pr-20 ${cName} `}>
        {" "}
        {urls.map((url, index) => {
          return (
            <img
              className="w-[8vw] flex-shrink-0"
              key={index}
              src={url}
              alt="Marquee Image"
            />
          );
        })}
      </div>

      <div className={`flex flex-shrink-0 gap-20 py-5 pr-20 ${cName} `}>
        {" "}
        {urls.map((url, index) => {
          return (
            <img
              className="w-[8vw] flex-shrink-0"
              key={index}
              src={url}
              alt="Marquee Image"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Marquee;
