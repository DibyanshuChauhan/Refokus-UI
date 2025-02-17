import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700 mb-10">
      <div className="nleft flex items-center">
        <img
          className="cursor-pointer"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((element, index) =>
            element.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <Link
                className="text-white text-sm flex items-center gap-1"
                key={index}
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {element}
              </Link>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
