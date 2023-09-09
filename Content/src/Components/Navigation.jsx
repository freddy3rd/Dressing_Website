import React from "react";
import { PiSpeakerHighLight } from "react-icons/pi";
import { FaSearch, FaShoppingBag, FaLine } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navigation() {
  return (
    <nav className="flex w-full max-w-screen-xl p-4 items-center justify-between text-slate-800 text-md ">
      <div className="md:flex hidden space-x-2 justify-around gap-2">
        {[
          ["Mans", "/"],
          ["Women", "/"],
          ["Childrens", "/"],
          ["Explore", "/"],
        ].map(([link, url], index) => (
          <a
            key={link}
            href={url}
            className="font-semibold hover:text-slate-50"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="md:hidden block">
        <RxHamburgerMenu className="text-4xl" />
      </div>

      <div className="flex justify-around gap-2">
        {[
          [{ logo: <PiSpeakerHighLight /> }, "/Home"],
          [{ logo: <FaSearch /> }, "/"],
          [{ logo: <FaShoppingBag /> }, "/"],
        ].map(([link, url], index) => (
          <a key={index} href={url} className="text-2xl md:text-xl ">
            {link.logo}
          </a>
        ))}
      </div>
    </nav>
  );
}
