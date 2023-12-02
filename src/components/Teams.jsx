import React from "react";
import image from "../constant/image";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import SectionTitle from "./SectionTitle";

const teams_layout = [
  {
    id: 1,
    name: "joshua King",
    role: "Farmer",
    image: image.expert2,
    icons: [<FaFacebook />, <AiFillTwitterCircle />],
  },
  {
    id: 2,
    name: "Marianne Loreno",
    role: "Designer",
    image: image.expert1,
    icons: [<BiLogoInstagram />, <FaFacebook />, <AiFillTwitterCircle />],
  },
  {
    id: 3,
    name: "Riga Pelore",
    role: "Farmer",
    image: image.expert3,
    icons: [<BiLogoInstagram />, <FaFacebook />, <AiFillTwitterCircle />],
  },
];

const Teams = () => {
  return (
    <section className="align-element grid place-items-center mt-16">
      <div className="text-center w-[300px] lg:w-500px">
        <SectionTitle
          header="Teams"
          title=" Our Organic Experts"
          text=" Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industrys
           standard dummy text ever since the 1500s, when an unknown printer took a galley."
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-4 gap-x">
        {teams_layout.map((item) => {
          const { id, name, role, image, icons } = item;
          return (
            <div
              className="card w-[300px] bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 "
              key={id}
            >
              <figure>
                <img src={image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <i className="font-bold text-xs text-[#7EB693]">{role}</i>
                <div className="card-actions justify-end">
                  {icons.map((icon, index) => {
                    return <div key={index}>{icon}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Teams;
