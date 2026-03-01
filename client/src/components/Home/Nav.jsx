import React, { useState } from "react";
import logo from "../../assets/images/images";
import { NavLink, useNavigate } from "react-router-dom";

export const navItems = [
  {
    page: "Home",
    path: "/",
  },
  { page: "Menu", path: "/menu" },
  {
    page: "About Us",
    path: "/about",
  },
  {
    page: "Contact",
    path: "/contact",
  },
];

export const Nav = () => {
  const [isOpen, setOpen] =useState(false)
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center gap-4 px-10 mt-6 ">
        <div className="flex gap-2 justify-start items-center">
          <img src={logo} className="w-7 "></img>
          <h1 className="text-lg font-semibold text-[#b76e79]">
            Sweet Delights
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex flex-wrap gap-4 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-[#b76e79] border-[#b76e79] hover:border-b-2 transition cursor-pointer ${
                      isActive ? "text-[#b76e79] border-b-2" : ""
                    }`
                  }
                  to={item.path}
                >
                  {item.page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                ` cursor-pointer ${isActive ? "text-[#b76e79]" : "text-black"}`
              }
            >
              <span className="material-symbols-outlined ">shopping_cart</span>
            </NavLink>
          <a className=" md:hidden ml-2">
            <span className="material-symbols-outlined" onClick={()=>setOpen(!isOpen)}>menu</span>
          </a>

           <div
        className={`md:hidden bg-[#fafafa]  transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 py-4 " : "max-h-0"
        }`}
      >
        <ul className=" gap-4 font-medium flex flex-col justify-center items-center ">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setOpen(false)}
              className="hover:text-[#b76e79] cursor-pointer text-center "
            >
              <NavLink
                  className={({ isActive }) =>
                    `hover:text-[#b76e79] border-[#b76e79] hover:border-b-2 transition cursor-pointer ${
                      isActive ? "text-[#b76e79] border-b-2" : ""
                    }`
                  }
                  to={item.path}
                >
                  {item.page}
                </NavLink>
            </li>
          ))}
        </ul>
      </div>
        </div>
      </div>
    </>
  );
};
