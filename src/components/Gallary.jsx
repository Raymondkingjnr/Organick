import React from "react";
import image from "../constant/image";

const gallary_img = [
  {
    id: 1,
    png: image.juice,
    text: "fruits",
  },
  {
    id: 2,
    png: image.food,
    text: "food",
  },
  {
    id: 2,
    png: image.cookies,
    text: "nut cookies",
  },
];
const Gallary = () => {
  return (
    <section className="bg-[#F1F8F4]">
      <div className=" align-element grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-7 items-center place-items-center place-content-center py-12 my-10">
        {gallary_img.map((image) => {
          const { id, png, text } = image;

          return (
            <div
              className="card w-72 bg-base-100 shadow-xl image-full"
              key={id}
            >
              <figure>
                <img src={png} alt="Shoes" srcSet="" />
              </figure>
              <div className="card-body grid items-center">
                <div className="card-actions justify-center">
                  <button className="btn bg-[#fff] w-[150px] capitalize">
                    {text}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallary;
