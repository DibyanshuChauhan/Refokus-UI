/* eslint-disable react/prop-types */
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Get Started"}) => {
  return (
    <div className="w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between cursor-pointer">
        <span className="text-sm font-md">{title}</span>
        <IoIosReturnRight />
    </div>
  );
};

export default Button