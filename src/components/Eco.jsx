import React from "react";
import image from "../constant/image";
import SectionTitle from "./SectionTitle";

const text_list = [
  {
    id: 1,
    title: " Start with Our Company First",
    text: " Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    id: 2,
    title: " Learn How to Grow Yourself",
    text: " Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
  {
    id: 3,
    title: " Farming Strategies of Today",
    text: " Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
  },
];

const Eco = () => {
  return (
    <section className="grid lg:grid-cols-2 relative items-center place-content-center place-items-center align-element">
      <div className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] md:w-[600px] md:h-[600px] shadow-lg">
        <img src={image.eco_img} alt="Eco image" className="rounded" />
      </div>
      <div className="card rounded-2xl mt-3 shadow-2xl w-[350px] lg:w-[400px] md:w-[600px] p-9 lg:absolute lg:z-[9999] lg:left-[30%] sm:relative bg-white ">
        <SectionTitle
          header="Eco Friendly"
          title="Econis is a Friendly Organic Store"
        />

        {text_list.map((item) => {
          const { id, text, title } = item;
          return (
            <div key={id}>
              <h4 className="text-[#274C5B] text-lg pb-2 font-semibold">
                {title}
              </h4>
              <p className="text-[#525C60] text-xs font-semibold ">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Eco;
