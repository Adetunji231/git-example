import React from "react";
import dine from "../assets/image/dineinIcon.svg"
import takeout from "../assets/image/takeoutIcon.svg"
import delivery from "../assets/image/deliveryIcon.svg"
export const Order = () => {
  return (
    <div className="bg-home bg-cover bg-center h-screen bg-fixed pt-12">
      <div className=" ml-48 shadow-2xl mx-10 rounded-xl py-6 px-6 bg-[#EFE2CF] w-[450px] ">
        <h1 className=" text-2xl font-extrabold text-[#502314] pb-4">What would you like?</h1>
        <div className=" flex items-center gap-3 py-2 px-4 rounded-xl mb-3 bg-[#F5EBDC] ">
          <img src={dine} width={50}/>
          <diV>
          <h3 className=" text-lg text-[#502314] font-bold">Dine-in Pickup</h3>
          <p className="text-sm pt-1">Order is served in restaurant</p>
          </diV>
        </div>
        <div className=" flex items-center gap-3 py-2 px-4 rounded-xl mb-3 bg-[#F5EBDC] ">
        <img src={takeout} width={50}/>
        <diV>
        <h3 className=" text-lg text-[#502314] font-bold">Takeout</h3>
        <p className="text-sm pt-1">Order is served in restaurant</p>
        </diV>
      </div>
      <div className=" flex items-center gap-3 py-2 px-4 rounded-xl mb-3 bg-[#F5EBDC] ">
      <img src={delivery} width={50}/>
      <diV>
      <h3 className=" text-lg text-[#502314] font-bold">Delivery</h3>
      <p className="text-sm pt-1">Order is served in restaurant</p>
      </diV>
    </div>
      </div>
    </div>
  );
};
