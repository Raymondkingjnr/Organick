import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const Extra = () => {
  return (
    <div className="max-w-2xl my-20 mx-auto grid lg:grid-cols-2 md:grid-cols-2  place-items-center">
      <section
        className="bg-contain bg-no-repeat h-48 w-80  "
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="grid mt-[4rem] pl-4">
          <i className="text-sm text-base-100 font-semibold">Natural!!</i>
          <h3 className="text-lg text-base-100 font-bold">
            Get garden <br /> fresh fruits
          </h3>
        </div>
      </section>
      <section
        className="bg-contain bg-no-repeat h-48 w-80 "
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="grid mt-[4rem] pl-4">
          <i className="text-sm text-[#7eb693] font-semibold">Offer!!</i>
          <h3 className="text-lg text-neutral font-bold">
            Get 10% off <br />
            on Vegetables
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Extra;
