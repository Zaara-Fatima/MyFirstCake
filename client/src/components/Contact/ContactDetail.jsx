import React from "react";

export const ContactDetail = ({className}) => {
  return (
    <div >
      <ul className={className}>
        <li className="flex gap-3 " >
          <span class="material-symbols-outlined text-[#b76e79] ">location_on</span>
          <h6 className="text-[#5a5a5a]">(123) Cake Lane, Sweetville, CA 90210</h6>
        </li>
        <li className="flex gap-3" >
          <span class="material-symbols-outlined text-[#b76e79]">call</span>
          <h6 className="text-[#5a5a5a]">9474647399</h6>
        </li>
        <li className="flex gap-3" >
          <span class="material-symbols-outlined text-[#b76e79]">mail</span>
          <h6 className="text-[#5a5a5a]">info@sweetdelights.com</h6>
        </li>
      </ul>
    </div>
  );
};
