import React from "react";
import image from "../constant/image";
import SectionTitle from "./SectionTitle";

const Hero = () => {
  return (
    <div
      className="h-[700px] bg-cover object-contain  bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${image.hero_bg})` }}
    >
      <section className="grid items-center align-element ">
        <div className="text-left mt-[15rem] w-[200px]">
          <SectionTitle
            header={" 100% natural food"}
            title={" Choose the best healthier food of life"}
          />

          <button className="btn bg-[#EFD372] border-transparent capitalize">
            Explore Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
