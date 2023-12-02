import React from "react";
import image from "../constant/image";
import SectionTitle from "./SectionTitle";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <section
      className="bg-cover h-[800px] w-[100%]  "
      style={{ backgroundImage: `url(${image.video_img})` }}
    >
      <section className="grid place-content-center">
        <div className=" mt-16 text-center px-8 w-[400px] lg:w-[600px]">
          <SectionTitle
            header="Organic Only"
            title=" Everyday Fresh & Clean"
            text="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industrys standard dummy text ever since the "
          />
        </div>
      </section>
      <div className="grid place-items-center">
        <div className=" h-16 w-16 border grid place-content-center text-center rounded-full items-center hover:shadow-md transition duration-300 cursor-pointer bg-[#7EB693]">
          <p className="text-[#fff] text-center text-xl">
            <FaPlay />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;
