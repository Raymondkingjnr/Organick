import React from "react";
import image from "../constant/image";
import { GiFarmTractor } from "react-icons/gi";
import { GiFactory } from "react-icons/gi";
import SectionTitle from "./SectionTitle";

const AboutSec2 = () => {
  return (
    <section className="align-element grid  md:grid-cols-1 lg:grid-cols-2 items-center place-content-center place-items-center gap-[3rem] mt-20 bg-white">
      <div>
        <img src={image.about2} alt="" />
      </div>

      <main className=" shadow-lg hover:shadow-2xl transition duration-300 md:w-[600px]  rounded-lg p-8">
        <div>
          <SectionTitle
            header="About Us"
            title="We do Creative Things for Success"
            text="Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley."
          />
        </div>
        <p className="text-sm font-normal pb-9 pt-8 text-[#525C60]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <article className="top-flex mb-6">
          <div className="flex gap-2 align-middle">
            <GiFarmTractor className="text-3xl text-[#7EB693]" />
            <h4 className="text-sm pt-2 font-semibold text-[#274C5B]">
              Modern Agriculture Equipment
            </h4>
          </div>
          <div className="flex gap-2 align-middle place-content-center place-items-center">
            <GiFactory className="text-3xl text-[#7EB693]" />
            <h4 className="text-sm font-semibold text-[#274C5B]">
              No growth hormones are used
            </h4>
          </div>
        </article>
        <button className="btn text-[#fff] bg-[#274C5B] capitalize">
          Explore more
        </button>
      </main>
    </section>
  );
};

export default AboutSec2;
