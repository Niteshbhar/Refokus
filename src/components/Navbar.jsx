import Button from "./button";

function Navbar() {
  return (
    <>
      <div className="border-b-[1px] border-zinc-500 max-w-screen-xl mx-auto bg-zinc-800 py-4 px-2 flex  items-center justify-between">
        {" "}
        <div className="leftSide flex items-center ">
          <img
            className="w-16"
            src="data:image/png;base64,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"
          />{" "}
          <div className="links flex gap-14 ml-20">
            {["Home", "Work", "Culture", "", "News"].map((ele, index) => {
              return (
                <>
                  {ele.length === 0 ? (
                    <span className="w-[2px] h-5 bg-zinc-700"></span>
                  ) : (
                    <a
                      className="text-zinc-100 flex gap-1 items-center"
                      href="#"
                    >
                      {index == 1 && (
                        <span
                          style={{ boxShadow: "0 0 0.45em  #00FF19" }}
                          className="inline-block w-2 h-2 rounded-full bg-green-500"
                        ></span>
                      )}
                      {ele}
                    </a>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="rightSide">
          <Button />
        </div>
      </div>
    </>
  );
}

export default Navbar;
