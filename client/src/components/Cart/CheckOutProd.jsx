import React from "react";

export const CheckOutProd = () => {
  return (
    <div className="w-full flex gap-2 items-center justify-between rounded-xl shadow-[#797777] bg-white px-4 py-3 shadow-sm ">
      <div className="flex items-center gap-4">
        <img
          src="https://tse1.explicit.bing.net/th/id/OIP.0wfrh4LXvHaev05IPVgvBQHaJK?rs=1&pid=ImgDetMain&o=7&rm=3"
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex flex-col ">
          <p className="text-sm font-medium">Classic Vanilla Bean Cake</p>
          <p className="text-xs text-[#5a5a5a]">Price: $35.00</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 text-gray-500">
          <button className="text-lg font-medium">−</button>
          <span className="text-sm text-black">1</span>
          <button className="text-lg font-medium">+</button>
        </div>

        {/* Total price */}
        <p className="font-medium text-sm">$35.00</p>
      </div>
    </div>
  );
};
