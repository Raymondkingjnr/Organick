import React from "react";

const BgComponent = ({ text, background }) => {
  return (
    <div
      className="grid items-center text-right md:text-center pr-8 md:pr-0 bg-cover h-[200px] mt-7"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h4 className="text-2xl capitalize font-bold text-[#274C5B]">{text}</h4>
    </div>
  );
};

export default BgComponent;
