import React from "react";
import SectionTitle from "./SectionTitle";
import image from "../constant/image";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { GiMilkCarton, GiTreeRoots, GiPowderBag } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { PiPlantFill } from "react-icons/pi";
import Menu from "./Menu";

const right_menu = [
  {
    id: 1,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    title: "Dairy Products",
    img: <GiMilkCarton />,
  },
  {
    id: 2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    title: "Store Services",
    img: <MdOutlineStoreMallDirectory />,
  },
  {
    id: 2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    title: "Delivery Services",
    img: <GrDeliver />,
  },
];
const left_menu = [
  {
    id: 1,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    title: "Agricultural Services",
    img: <PiPlantFill />,
  },
  {
    id: 2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    title: "Organic Products",
    img: <GiTreeRoots />,
  },
  {
    id: 2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    title: "Fresh Vegetables",
    img: <GiPowderBag />,
  },
];

const Grow = () => {
  return (
    <section className="bg-[#F9F8F8] mt-20 py-20">
      <div className="mt-5 text-center">
        <SectionTitle
          header="What we Grow"
          title=" Better Agriculture for Better Future"
        />
      </div>
      <main className="grid md:grid-cols-3 place-items-center gap-y-9 px-8 mt-8">
        <div className="float-right text-right">
          {right_menu.map((items) => {
            return (
              <Menu
                key={items.id}
                text={items.text}
                title={items.title}
                icon={items.img}
                direction="right"
              />
            );
          })}
        </div>
        <figure>
          <img src={image.service_img} alt="" className="object-cover" />
        </figure>
        <div className="float-left text-left">
          {left_menu.map((items) => {
            return (
              <Menu
                key={items.id}
                text={items.text}
                title={items.title}
                icon={items.img}
                direction="left"
              />
            );
          })}
        </div>
      </main>
      <div className="grid place-items-center mt-7">
        <button className="btn bg-white text-[#274C5B] border-[#274C5B] capitalize">
          explore more{" "}
        </button>
      </div>
    </section>
  );
};

export default Grow;
