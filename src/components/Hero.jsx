import React from "react";
import image from "../constant/image";

const Hero = () => {
  return (
    <div
      className="h-[100vh] bg-cover object-cover  bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${image.hero_bg})` }}
    >
      <div className="pt-72 text-left align-element">
        <i className="text-sm font-medium mb-1 text-[#7eb693] ">
          100% natural food
        </i>
        <h3 className="lg:text-3xl font-bold pt-5 w-60 leading-10 tracking-wide sm:text-sm sm:leading-4">
          Choose the best healthier food of life{" "}
        </h3>
        <button className="btn btn-warning capitalize mt-5">Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;
