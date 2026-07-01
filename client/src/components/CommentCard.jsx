import React from "react";

export const CommentCard = ({ comment = "",userName="", userImg = "" , className=""}) => {
  return (
    <div
      className={`flex flex-col gap-4 p-5  shadow-sm shadow-[#5a5a5a59] w-full  rounded-lg ${className}`}
    >
      <p className="text-sm text-center  font-medium text-[#5a5a5a]">"{comment}"</p>
      <div className="flex items-center gap-4">
        <img className="w-10 h-10 object-cover rounded-full" src={userImg}></img>
        <h6 className="text-sm font-medium">{userName}</h6>
      </div>
    </div>
  );
};



