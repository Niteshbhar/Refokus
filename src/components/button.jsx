import { IoIosReturnRight } from "react-icons/io";
function Button({ title = "get Started" }) {
  return (
    <>
      <div className="overflow-hidden rounded-full flex-col w-[12vw] h-8 relative group">
  <div className="absolute flex items-center justify-evenly w-full px-4 py-2 bg-zinc-100 rounded-full h-8 effects cursor-pointer">
    <span className="text-sm font-medium">{title}</span>
    <IoIosReturnRight />
  </div>
  <div className="absolute flex items-center justify-evenly w-full px-4 py-2 bg-zinc-100 rounded-full h-8 cursor-pointer effects">
    <span className="text-sm font-medium">{title}</span>
    <IoIosReturnRight />
  </div>
</div>

    </>
  );
}
// Button.defaultProps = {
//   title: "Get Started"
// }
export default Button;
