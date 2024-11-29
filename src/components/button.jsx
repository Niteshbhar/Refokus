import { IoIosReturnRight } from "react-icons/io";
function Button({title="get Started"}) {
  return (
    <>
      <div className="flex items-center justify-evenly but w-40 px-4 py-2 bg-zinc-100 rounded-full ">
        <span className="text-sm font-medium">{title}</span>
        <IoIosReturnRight />
      </div>
    </>
  );
}
// Button.defaultProps = {
//   title: "Get Started"
// }
export default Button;
