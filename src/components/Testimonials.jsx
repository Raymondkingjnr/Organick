import React from "react";
import image from "../constant/image";
import SectionTitle from "./SectionTitle";
import girl from "../assets/girl.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const carouselItems = [
  {
    id: 1,
    image: girl,
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    name: "Sarah Taylor",
  },
  {
    id: 1,
    image: photo2,
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    name: "Adam Jones",
  },
  {
    id: 1,
    image: photo3,
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    name: "Raymond philips",
  },
];

const Testimonials = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat w-[100%] flex justify-center px-10 mt-5 overflow-x-hidden"
      style={{ backgroundImage: `url(${image.testimonial})` }}
    >
      <main>
        <div className="mt-5 grid place-items-center">
          <div className="text-center w-56">
            <SectionTitle
              header="Testimonial"
              title=" What our customers are saying"
            />
          </div>
        </div>

        {/* Carousel sec */}

        <div className=" w-[700px] carousel flex items-center place-items-center rounded-box mt-10">
          {carouselItems.map((item, index) => {
            const { id, image, text, name } = item;

            return (
              <div
                className="carousel-item w-full flex-col items-center h-full text-center "
                key={`${id} ${index}`}
              >
                <div className="pt-2">
                  <img src={image} alt="" className="rounded-full w-14 h-14" />
                </div>
                <p className=" pt-10 text-sm font-semibold leading-8 w-80">
                  {text}
                </p>
                <h4 className=" pt-8 text-lg font-bold pb-3 ">{name}</h4>
              </div>
            );
          })}
        </div>
        <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 items-center place-items-center gap-x-8 gap-y-9 mt-12 mb-12 px-[6rem] ">
          <div className="text-center flex items-center place-content-center w-28 h-28 rounded-full border-[5px] border-[#7EB693] border-solid bg-[#f1f1f1]">
            <main>
              <h3 className="text-lg font-bold text-[#274C5B]">100%</h3>
              <h3 className="text-xs  font-semibold text-[#274C5B] capitalize">
                Organic
              </h3>
            </main>
          </div>
          <div className="text-center flex items-center place-content-center w-28 h-28 rounded-full border-[5px] border-[#7EB693] border-solid bg-[#f1f1f1]">
            <main>
              <h3 className="text-lg font-bold text-[#274C5B]">285</h3>
              <h3 className="text-xs  font-semibold text-[#274C5B] capitalize">
                Active Product
              </h3>
            </main>
          </div>
          <div className="text-center flex items-center place-content-center w-28 h-28 rounded-full border-[5px] border-[#7EB693] border-solid bg-[#f1f1f1]">
            <main>
              <h3 className="text-lg font-bold text-[#274C5B]">350+</h3>
              <h3 className="text-xs  font-semibold text-[#274C5B] capitalize">
                Organic Orchads
              </h3>
            </main>
          </div>
          <div className="text-center flex items-center place-content-center w-28 h-28 rounded-full border-[5px] border-[#7EB693] border-solid bg-[#f1f1f1] p-2">
            <main>
              <h3 className="text-lg font-bold text-[#274C5B]">25+</h3>
              <h3 className=" text-xs font-semibold text-[#274C5B] capitalize">
                Years of farming
              </h3>
            </main>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Testimonials;
