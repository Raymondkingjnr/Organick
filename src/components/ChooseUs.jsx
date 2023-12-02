import React from "react";
import image from "../constant/image";
import { MdPolicy, MdOutlineSupportAgent, MdPayments } from "react-icons/md";
import { IoIosLeaf } from "react-icons/io";
import SectionTitle from "./SectionTitle";

const choose_us_layout = [
  {
    id: 1,
    text: "Simply dummy text of the printintypesetting industry.",
    title: "Return Policy",
    icon: <MdPolicy />,
  },
  {
    id: 2,
    text: "Simply dummy text of the printintypesetting industry.",
    title: "100% Fresh",
    icon: <IoIosLeaf />,
  },
  {
    id: 1,
    text: "Simply dummy text of the printintypesetting industry.",
    title: "support 24/7",
    icon: <MdOutlineSupportAgent />,
  },
  {
    id: 1,
    text: "Simply dummy text of the printintypesetting industry.",
    title: "Secured Payment",
    icon: <MdPayments />,
  },
];

const ChooseUs = () => {
  return (
    <section className="bg-[#F9F8F8] mt-10">
      <article className="align-element grid  md:grid-cols-1 place-items-center lg:grid-cols-2 gap-[5rem] mt-20 p-7">
        <div>
          <aside className=" lg:text-left p-5">
            <SectionTitle
              header="Why choose us?"
              title=" We do not buy from the open market & traders."
              text="  Simply dummy text of the printing and typesetting industry. Loremhad ceased to been the industrys standard the 1500s, when anunknown"
            />
          </aside>
          <div className="flex align-middle gap-2 items-center py-5 rounded-full pl-[2rem] my-7 bg-[#ECECEC] w-64">
            <div className="circle h-3 w-3 rounded-full border-solid border-[3px] border-[#7EB693]"></div>
            <h3 className="mb-[1px] text-sm font-semibold ">
              100% Natural Product
            </h3>
          </div>
          <p className="ml-[2.5rem]">
            Simply dummy text of the printing and typesetting industry Lorem
            Ipsum
          </p>
          <div className="flex align-middle gap-2 items-center py-5 rounded-full pl-[2rem] my-7 bg-[#ECECEC] w-64">
            <div className="circle h-3 w-3 rounded-full border-solid border-[3px] border-[#7EB693]"></div>
            <h3 className="mb-[1px] text-sm font-semibold ">
              Increases resistance
            </h3>
          </div>
          <p className="ml-[2.5rem]">
            Filling, and temptingly healthy, our Biona Organic Granola with Wild
            Berries is just the thing
          </p>
        </div>
        <div>
          <img src={image.choose_img} alt="choose_img" />
        </div>
      </article>

      {/* LAYOUT */}
      <main className=" align-element grid grid-cols-2 md:grid-cols-4 place-items-center gap-6 gap-x-[4.5rem] p-9">
        {choose_us_layout.map((item) => {
          const { id, text, title, icon } = item;
          return (
            <div
              className="card shadow-xl bg-base-300 p-2 w-[160px] lg:w-[200px]"
              key={id}
            >
              <div className="grid place-items-center pt-6 text-center">
                <p className="font-bold text-xl">{icon}</p>
              </div>
              <div className="items-center text-center">
                <h4 className="text-sm font-bold text-[#274C5B] pt-4">
                  {title}
                </h4>
                <p className="text-sm font-normal text-[#525C60] py-5">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default ChooseUs;
