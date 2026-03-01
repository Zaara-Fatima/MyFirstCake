import React from "react";
import { navItems } from "./Nav";
import logo from "../../assets/images/images";
import { ContactDetail } from "../Contact/ContactDetail";
import { SocialIcon } from "../../assets/Icons/Icons";
import { Button } from "../Button";
import { Input } from "../Input";

export const Footer = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-8  bg-[#f4f4f4] py-6 px-6">

      <div className="flex flex-col gap-2 text-center md:text-left">
        <div className="flex gap-2 justify-center md:justify-start items-center">
          <img src={logo} className="w-5"></img>
          <h1 className="text-lg font-semibold text-[#b76e79]">
            Sweet Delights
          </h1>
        </div>
        <h6 className="text-[#5a5a5a] text-sm">
          Crafting Delightful cafes and pastries for every special moment. Taste
          the sweetness!
        </h6>
        <div className="flex gap-4  justify-center md:justify-start">
          {SocialIcon.map((icon,index)=>
            <img src={icon} key={index} className="w-5 cursor-pointer"/>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-lg ">Quick Links</h2>
        <div>
          <ul>
            {navItems.map((item, index) => (
              <li className="text-[#5a5a5a] text-sm" key={index}>{item.page}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-lg ">Contact Us</h2>
        <ContactDetail className="text-sm"/>
      </div>

      <div>
        <h2 className="text-lg ">Newsletter</h2>
        <h6 className="text-[#5a5a5a] text-sm">Stay updated with our latest Offerings and promotions</h6>
        <div className="flex flex-col md:flex-row ">
          <Input placeholder="Your Email" className=" bg-white text-[#5a5a5a] flex-1 min-w-0 mt-2"/>
          <Button text="Subscribe" className="ml-2 bg-[#b76e79] w-full md:w-auto shrink-0 text-white mt-2 "/>
        </div>
      </div>
      <div className="col-span-full flex justify-center">
        <h6 className="text-[#5a5a5a] text-sm ">© 2025 Sweet Delights. All rights reserved.</h6>
      </div>

    </div>
  );
};
