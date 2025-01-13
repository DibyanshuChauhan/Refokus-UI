/* eslint-disable react/prop-types */
import Button from "./Button";

const Product = ({val,mover,count}) => {
    const { title,description,live, } = val;
  return (
    <div className="w-full h-[23rem] py-20 text-white bg-zinc-900">
        <div onMouseEnter={()=> {mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
            <h1 className="text-6xl capitalize font-medium">{title}</h1>
            <div className="details w-1/3">
                <p className="mb-10 ">{description}</p>
                <div className="flex items-center gap-5">
                {live && <Button />}
                {val.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Product