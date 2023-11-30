import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "about",
    text: "about",
  },
  {
    path: "service",
    text: "service",
  },
  {
    path: "contact",
    text: "contact",
  },
  {
    path: "news",
    text: "News",
  },
];

const Navlinks = () => {
  return (
    <div className="lg:flex">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link
              to={link.path}
              className="text-meduim font-semibold text-sm capitalize"
            >
              {link.text}{" "}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Navlinks;
