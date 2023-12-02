import React from "react";

const SectionTitle = ({ text, title, header }) => {
  return (
    <div>
      <i className="text-xs font-bold text-[#7EB693]">{header}</i>
      <h3 className="text-sm font-bold md:text-xl text-[#274C5B] py-2">
        {title}
      </h3>
      <p className={`text-sm font-normal text-[#525C60] py-5`}>{text}</p>
    </div>
  );
};

export default SectionTitle;
