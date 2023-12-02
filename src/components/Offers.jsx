import React from "react";
import image from "../constant/image";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    image: image.offer1,
    title: "Mung Bean",
    forma_price: "$20.00",
    current_price: "$11.00",
  },
  {
    id: 1,
    image: image.offer2,
    title: "Brown Hazelnut",
    forma_price: "$20.00",
    current_price: "$12.00",
  },
  {
    id: 1,
    image: image.offer3,
    title: "Onion",
    forma_price: "$20.00",
    current_price: "$17.00",
  },
  {
    id: 1,
    image: image.offer4,
    title: "Cabbage",
    forma_price: "$20.00",
    current_price: "$17.00",
  },
];

const Offers = () => {
  return (
    <section className=" bg-[#274C5B] py-10 ">
      <div className=" max-w-6xl mx-auto p-7">
        {/* TOP */}
        <main className="top-flex">
          <div className="">
            <i className="font-semibold text-sm text-[#7EB693]">Offers!!</i>
            <h3 className="font-extrabold text-sm text-[#FFFFFF]">
              We Offer Organic For You
            </h3>
          </div>
          <div className="mt-2">
            <button className="btn bg-[#EFD372] w-40 border-transparent font-semibold text-sm">
              View All Products
            </button>
          </div>
        </main>

        <div className="grid gap-x-[3rem] gap-y-5 lg:grid-cols-4 md:grid-cols-2 place-items-center pt-8">
          {cards.map((item) => {
            const { id, title, image, forma_price, current_price } = item;
            return (
              <div
                className="card w-[280px] bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
                key={id}
              >
                <div className="text-center card-body">
                  <p className=" w-20 text-[#ffff] mt-2 ml-2 font-semibold text-xs p-1 rounded bg-[#274C5B]">
                    vegetables
                  </p>
                </div>
                <figure className="px-10 pt-10">
                  <img
                    src={image}
                    alt={title}
                    className="rounded-xl w-36 h-36 object-contain"
                  />
                </figure>
                <div className="card-body items-start text-left ">
                  <p className="card-title text-sm font-semibold">{title}</p>
                  <div class="divider"></div>
                  <div className="flex align-middle gap-x-3">
                    <s className="font-semibold text-xs text-[#B8B8B8]">
                      {forma_price}
                    </s>
                    <p className="font-semibold text-xs text-[#274C5B]">
                      {current_price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
