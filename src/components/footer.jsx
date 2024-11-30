import React from "react";

function Footer() {
  return (
    <div className="w-full pt-32 ">
      <div className="max-w-screen-xl mx-auto py-10 px-10 flex gap-32 text-zinc-100">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>{" "}
            {["instagram", "twitter (X?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>{" "}
            {["instagram", "twitter (X?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 text-right"><p>Get insights and updates on branding, websites and growth.</p></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
