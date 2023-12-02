import React from "react";

const Menu = ({ icon, title, text, direction }) => {
  return (
    <div className="">
      <p className="text-[#7EB693] text-2xl" style={{ float: direction }}>
        {icon}
      </p>
      <h3 className="text-sm font-bold md:text-lg text-[#274C5B] pt-8">
        {title}
      </h3>
      <p className="text-sm font-normal text-[#525C60] pb-6 pt-2">{text}</p>
    </div>
  );
};

export default Menu;
