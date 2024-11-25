import { IoIosReturnRight } from "react-icons/io";
function Button() {
  return (
    <>
      <div className="flex items-center justify-evenly but min-w-40 px-4 py-2 bg-zinc-100 rounded-full ">
        <span className="text-sm font-medium">Get Started</span>
        <IoIosReturnRight />
      </div>
    </>
  );
}

export default Button;
