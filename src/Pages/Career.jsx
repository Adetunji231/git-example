import React from "react";
import career from "../assets/image/gallery_.png";
import { Button } from "../common/Button";

export const Career = () => {
  return (
    <div>
      <div className=" font-FlameBold px-10 text-[40px] py-10 text-[#502314] md:text-[48px] font-extrabold lg:px-48 lg:py-10">
        <h1 className=" font-custom">Your Career,</h1>
        <h1>Your Way</h1>
      </div>
      <div className="px-10 flex justify-center">
        <img src={career} />
      </div>
      <div className=" flex justify-center items-center flex-col">
      <h1 className=" font-FlameBold text-[35px] text-[#502314] md:text-[42px] leading-14 text-center font-extrabold py-10 md:w-[520px]">
        We may be the King, but around here, my friend,
        YOU rule your career.
      </h1>
      <p className=" font-FlamRegular text-[14px] text-[#502314] md:text-[16px] leading-14 text-center w-[420px] pb-10 ">
        You get to do things your way, and be, well, just you. The team's a
        proper team. We have a laugh, and we've got your back. And because we
        are shaking up fast food and opening restaurants like nobody's business,
        you get to be a part of something (royally) huge. It is only what "one"
        deserves.
      </p>
      </div>
      <Button />
      
    </div>
  );
};
