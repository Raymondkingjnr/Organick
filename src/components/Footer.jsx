import React from "react";
import image from "../constant/image";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { TiSocialPinterest } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

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

const Footer = () => {
  return (
    <section className="align-element my-20">
      <div
        className="bg-cover align-element h-56 border rounded-2xl  grid bg-center mt-52 mb-10 items-center"
        style={{ backgroundImage: `url(${image.footer_bg})` }}
      >
        <div className="top-flex">
          <article>
            <h4 className="text-lg md:text-xl font-semibold text-[#fff] ">
              Subscribe to our Newsletter
            </h4>
          </article>
          <div className="top-flex align-middle gap-3">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-warning w-280px md:w-[350px]"
            />
            <button className="btn bg-[#274C5B] border-transparent text-[#fff]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 2nd Footer */}
      <div className="hidden gap-x-5 lg:grid gap-y-5 lg:grid-cols-3 md:grid-cols-2 place-items-center items-center ">
        <div className="grid lg:text-right text-center p-2">
          <h4 className="capitalize font-semibold text-lg pb-4"> contact us</h4>
          <h4 className="text-sm font-semibold">Email</h4>
          <p className="mt-2 font-semibold text-sm text-[gray]">
            needhelp@Organia.com
          </p>
          <h4 className="mt-3 text-sm font-semibold">Phone</h4>
          <p className="mt-2 font-semibold text-sm text-[gray]">666 888 888</p>
          <h4 className="mt-3 text-sm font-semibold">Address</h4>
          <p className="mt-2 font-semibold text-sm text-[gray]">
            88 road, borklyn street, USA
          </p>
        </div>

        <div className="grid  place-items-center text-center p-2">
          <main className="items-center flex mb-3">
            <img src={image.logo} alt="" className="w-8 h-8 object-contain" />
            <h4 className="text-xl font-semibold">Organick</h4>
          </main>
          <p className="mt-4 mb-4 font-semibold text-sm text-[gray] leading-6 tracking-wide">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="flex gap-4 mt-4 mb-9">
            {icons.map((icon, index) => {
              return (
                <ul
                  key={index}
                  className="h-8 w-8 border p-[8.5px] text-center rounded-2xl bg-[#EFF6F1]"
                >
                  <p className="text-[#274C5B] text-center">{icon.icon}</p>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="p-2 text-center lg:text-left">
          <h4 className="capitalize font-semibold text-lg mb-10">
            {" "}
            utility page
          </h4>
          <p className="font-semibold text-sm text-[gray] mt-4">Style Guide</p>
          <p className="font-semibold text-sm text-[gray] pt-4">
            404 Not Found
          </p>
          <p className="font-semibold text-sm text-[gray] pt-4">
            Password Protected
          </p>
          <p className="font-semibold text-sm text-[gray] pt-4">Licences</p>
          <p className="font-semibold text-sm text-[gray] pt-4 pb-2">
            Changelog
          </p>
        </div>
      </div>

      {/* Footer */}

      <footer className="footer items-center p-4 bg-neutral text-neutral-content rounded-md">
        <aside className="items-center grid-flow-col">
          <img src={image.logo} alt="" className="w-8 h-8 object-contain" />
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
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
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
