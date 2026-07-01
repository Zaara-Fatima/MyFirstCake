import React from "react";

export const CheckOutProd = ({image, id, name, price, quantity }) => {

  return (
    <div className="w-full flex gap-2 items-center justify-between rounded-xl shadow-[#797777] bg-white px-4 py-3 shadow-sm ">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex flex-col ">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-[#5a5a5a]">Price: ${price}.00</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 text-gray-500">
          <button className="text-lg font-medium" >−</button>
          <span className="text-sm text-black">{quantity}</span>
          <button className="text-lg font-medium"   >+</button>
        </div>

        {/* Total price */}
        <p className="font-medium text-sm">${(price * quantity).toFixed(2)}.00</p>
      </div>
    </div>
  );
};
