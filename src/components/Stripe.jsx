/* eslint-disable react/prop-types */
const Stripe = ({value}) => {
    const { url,number } = value;
  return (
    <div className="w-[16.66%] px-10 py-5 border-[1px] border-zinc-600 flex items-center justify-between">
        <img src={url} alt="" />
        <span className="font-semibold">{number}</span>
    </div>
  );
};

export default Stripe