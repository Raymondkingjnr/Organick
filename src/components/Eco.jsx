import React from "react";
import image from "../constant/image";

const Eco = () => {
  return (
    <section className="grid lg:grid-cols-2 relative items-center place-content-center align-element">
      <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] shadow-lg">
        <img src={image.eco_img} alt="Eco image" className="rounded" />
      </div>
      <div className="card rounded-2xl mt-3 shadow-2xl w-[400px] lg:w-[400px] p-9 lg:absolute lg:z-[9999] lg:left-[30%] sm:relative bg-white ">
        <i className="text-xs font-semibold text-[#7EB693] pb-5">
          Eco Friendly
        </i>
        <h3 className="font-bold text-xl capitalize text-[#274C5B] pb-5">
          Econis is a <br /> Friendly Organic Store
        </h3>
        <h4 className="text-[#274C5B] text-lg pb-2 font-semibold">
          Start with Our Company First
        </h4>
        <p className="text-[#525C60] text-xs font-semibold ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
        <h4 className="text-[#274C5B] text-lg pb-2 pt-5 font-semibold">
          {" "}
          Learn How to Grow Yourself
        </h4>
        <p className="text-[#525C60] text-xs font-semibold ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
        <h4 className="text-[#274C5B] text-lg pb-2 pt-5 font-semibold">
          Farming Strategies of Today
        </h4>
        <p className="text-[#525C60] text-xs font-semibold ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
      </div>
    </section>
  );
};

export default Eco;
