import React from "react";
import { data } from "../constant";
import { RxAvatar } from "react-icons/rx";

const Newscard = () => {
  return (
    <div>
      <main className="grid lg:grid-cols-2 md:grid-cols-2 items-center place-content-center place-items-center gap-y-40 pt-10 my-20">
        {data.news_gallary.map((item) => {
          const { id, image, text, title, name, date } = item;
          return (
            <div key={id} className="relative px-4">
              <div className="absolute bg-white rounded text-center mt-2 ml-6">
                <p className="text-[#000] font-bold p-3">{date}</p>
              </div>
              <div className="lg:w-[550px] sm:w-[400px] md:w-[350px]">
                <img src={image} alt="" />
              </div>
              <div className="lg:w-[500px] grid sm:w-[350px] md:w-[300px] md:h-[200px] md:ml-6 md:top-[50%] rounded-xl shadow-2xl bg-white lg:top-[80%] md:absolute z-[9999] p-4">
                <article className="flex align-middle items-center gap-2">
                  <RxAvatar className="text-[#EFD372]" />
                  <p className="pb-[2px] font-semibold text-xs">{name}</p>
                </article>
                <h3 className="text-sm font-bold pt-2 text-[#274C5B] md:w-[200px]">
                  {title}
                </h3>
                <p className="text-sm font-light text-[#525C60] pt-3">{text}</p>
                <div className="mt-3 grid items-end w-[150px]">
                  <button className="btn bg-[#EFD372] border-transparent text-[#274C5B]">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Newscard;
