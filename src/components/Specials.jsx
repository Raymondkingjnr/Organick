import React from "react";
import image from "../constant/image";

const gallary = [
  {
    id: 1,
    image: image.spicy,
    name: "spicy",
  },
  {
    id: 2,
    image: image.nuts,
    name: "nuts & fried",
  },
  {
    id: 3,
    image: image.ginger,
    name: "vegetables",
  },
  {
    id: 4,
    image: image.apple,
    name: "Fruits",
  },
];

const Specials = () => {
  return (
    <section className="bg-[#274C5B] mt-28">
      <div className="align-element grid place-items-center py-20">
        <div className="text-center">
          <i className="text-xs font-bold text-[#7EB693] pb-4">About Us</i>
          <h3 className="text-sm lg:text-xl font-bold text-[#fff] py-8">
            What We Offer for You
          </h3>
        </div>
        <main className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-6 gap-x-14">
          {gallary.map((item) => {
            const { id, image, name } = item;
            return (
              <div key={id} className="text-center">
                <main>
                  <img src={image} alt="" className=" rounded-xl" />
                </main>
                <h4 className="text-[#fff] text-sm lg:text-lg font-bold pt-4">
                  {name}
                </h4>
              </div>
            );
          })}
        </main>
      </div>
    </section>
  );
};

export default Specials;
