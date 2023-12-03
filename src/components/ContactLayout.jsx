import React from "react";
import image from "../constant/image";
import { BsTelephone } from "react-icons/bs";
import SectionTitle from "./SectionTitle";

import { FaXTwitter, FaFacebookF, FaRegEnvelope } from "react-icons/fa6";
import { TiSocialPinterest } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import FormInput from "./FormInput";

const icons = [
  {
    icon: <FaXTwitter />,
  },
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <FaInstagram />,
  },
  {
    icon: <TiSocialPinterest />,
  },
];

const ContactLayout = () => {
  return (
    <div>
      <section className="align-element items-center place-content-center place-items-center grid lg:grid-cols-2 gap-y-7 gap-x-6 mt-7">
        <figure>
          <img
            src={image.eco_img}
            alt=""
            className="w-[500px] h-[500px] rounded-lg"
          />
        </figure>
        <main className="w-[300px] md:w-[500px] lg:h-[500px] border px-3 shadow-lg">
          <div>
            <SectionTitle
              title="We will love to talk about how we can work together."
              text="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley."
            />
          </div>
          <article className="shadow-xl rounded-lg flex mb-6 place-items-center align-middle gap-6 w-[250px] py-3 ">
            <div className="grid place-items-center">
              <div className=" h-10 w-10 border grid place-content-center text-center rounded-lg items-center hover:shadow-md transition duration-300 cursor-pointer bg-[#F4F4F4] ml-3">
                <p className="text-[#7EB693] text-center text-xl">
                  <FaRegEnvelope />
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#274C5B]">Message</h3>
              <p className="text-sm font-semibold text-[#525C60]">
                support@organic.com
              </p>
            </div>
          </article>
          <article className="shadow-xl rounded-lg flex place-items-center align-middle gap-6 w-[250px] py-3">
            <div className="grid place-items-center">
              <div className=" h-10 w-10 border grid place-content-center text-center rounded-lg items-center hover:shadow-md transition duration-300 cursor-pointer bg-[#F4F4F4] ml-3">
                <p className="text-[#7EB693] text-center text-xl">
                  <BsTelephone />
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#274C5B]">Contact</h3>
              <p className="text-sm font-semibold text-[#525C60]">
                +01 123 456 789
              </p>
            </div>
          </article>
          <aside className="flex mt-20 mb-5  gap-4">
            {icons.map((icon, index) => {
              return (
                <ul
                  key={index}
                  className="h-8 w-8 border p-[8.5px] text-center rounded-full grid items-center bg-[#EFF6F1]"
                >
                  <p className="text-[#274C5B] text-center">{icon.icon}</p>
                </ul>
              );
            })}
          </aside>
        </main>
      </section>
      {/*  */}
      <section
        className="bg-cover bg-no-repeat max-w-[1150px] mt-20 mx-auto h-[500px]"
        style={{ backgroundImage: `url(${image.contact_bg})` }}
      >
        <div className="w-[300px] md:w-[400px] bg-white px-3 py-3 float-right mr-2 mt-8 lg:mr-10 lg:mt-20 rounded-lg">
          <aside>
            <SectionTitle
              header={"Location"}
              title={"Our Farms"}
              text={
                "Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using."
              }
            />
          </aside>
          <div className="flex gap-2 mb-6">
            <p className="text-4xl font-extrabold text-[#7EB693]">
              <CiLocationOn />
            </p>
            <aside>
              <h4 className="text-sm font-semibold text-[#525C60] pb-[2px]">
                New York, USA:
              </h4>
              <p className="text-xs font-normal text-[#525C60]">
                299 Park Avenue New York, <br /> New York 10171
              </p>
            </aside>
          </div>
          {/*  */}
          <div className="flex gap-2 ">
            <p className="text-4xl font-extrabold text-[#7EB693]">
              <CiLocationOn />
            </p>

            <aside>
              <h4 className="text-sm font-semibold text-[#525C60] pb-[2px]">
                London, UK:
              </h4>
              <p className="text-xs font-normal text-[#525C60]">
                30 Stamford Street, <br /> London SE1 9LQ
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* FORM */}

      <section className="align-element grid place-content-center place-items-center mt-20">
        <div className="grid md:grid-cols-2 place-items-center gap-y-14 gap-x-20">
          <FormInput label={"Name*"} type={"text"} placeholder={"Your Name"} />
          <FormInput
            label={"Your Email*"}
            type={"email"}
            placeholder={"Your Email"}
          />
          <FormInput
            type={"text"}
            label={"Company*"}
            placeholder={"Your Company Name Here"}
          />
          <FormInput label={"Subject*"} placeholder={"How Can We Help You"} />
        </div>

        <textarea
          className="textarea textarea-bordered w-[100%] h-[300px] mt-12"
          placeholder="Message"
        ></textarea>
      </section>
    </div>
  );
};

export default ContactLayout;
