import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-10 flex gap-10 mx-auto">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 ">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <Link className="block mt-2 capitalize text-zinc-600" key={index}>
                {item}
              </Link>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <Link className="block mt-2 capitalize text-zinc-600" key={index}>
                {item}
              </Link>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-sm text-right">
              Refokus is a pioneering digital agency driven by design and
              empowored by technology.
            </p>
            <img
              className="w-32 mt-10"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
