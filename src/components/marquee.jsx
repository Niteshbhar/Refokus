import React from "react";

function Marquee({ urls }) {
  return (
    <div
     
      className="flex gap-20 w-full py-8 overflow-hidden marqueeAnimate"
    >
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
      {/* {urls.map((url, index) => {
        return (
          <img
            className="w-[8vw] flex-shrink-0"
            key={index}
            src={url}
            alt="Marquee Image"
          />
        );
      })} */}
    </div>
  );
}

export default Marquee;
