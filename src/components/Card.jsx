/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
const Card = ({ width, start, para, hover = "false" }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === true && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 ${width} rounded-xl min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full ">
        <div className="w-full flex items-center justify-between">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="capsule rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
