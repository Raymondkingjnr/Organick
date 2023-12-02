import React from "react";

const BgComponent = ({ text, background }) => {
  return (
    <div
      className="align-element grid items-center text-right md:text-center bg-cover h-[200px] rounded-2xl mt-7"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h4 className="text-2xl capitalize font-bold text-[#274C5B]">{text}</h4>
    </div>
  );
};

export default BgComponent;
