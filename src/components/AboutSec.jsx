import React from "react";
import image from "../constant/image";

const AboutSec = () => {
  return (
    <section
      className="mb-20 max-w-6xl mx-auto bg-cover h-[70vh] bg-center"
      style={{ backgroundImage: `url(${image.about1})` }}
    >
      <div>
        <div className="card-body lg:w-[500px] lg:mt-10 md:w-[450px] md:mt-32  sm:w-0 float-right">
          <i className="card-title capitalize text-[#7eb693] text-sm font-semibold">
            About us!!
          </i>
          <h4 className="text-2xl font-bold text-[#274c5b]">
            {" "}
            we belive in working accredited farms
          </h4>
          <p className="text-sm font-bold text-[#000] leading-5 mt-5">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div>
            <div className="gap-2 flex items-center mt-3">
              <div className=" w-[19%]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&"
                  className="object-contain object-center w-[80px] overflow-hidden shrink-0 max-w-full max-md:mt-5"
                />
              </div>

              <div className="items-stretch flex grow flex-col my-auto px-5 py-0.5 max-md:max-w-full max-md:mt-6">
                <div className="text-slate-700 text-sm font-extrabold max-md:max-w-full">
                  Organic Foods Only
                </div>
                <div className="text-[#000] text-sm  font-semibold  mt-2">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </div>
              </div>
            </div>
            {/*  */}
            <div className="gap-2 flex items-center mt-3">
              <div className=" w-[19%]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f26ec2b-8e78-4e47-a1e2-cf7ba91a47f5?apiKey=e6d0dd2523eb4c09bec414f19a613dec&"
                  className="object-contain object-center w-[80px] overflow-hidden shrink-0 max-w-full max-md:mt-5"
                />
              </div>

              <div className="items-stretch flex grow flex-col my-auto px-5 py-0.5 max-md:max-w-full max-md:mt-6">
                <div className="text-slate-700 text-sm font-extrabold max-md:max-w-full">
                  Organic Foods Only
                </div>
                <div className="text-[#000] text-sm  font-semibold mt-2 max-md:max-w-full">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </div>
              </div>
            </div>
          </div>
          <div className="card-actions justify-start mt-5">
            <button className="btn btn-neutral">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
