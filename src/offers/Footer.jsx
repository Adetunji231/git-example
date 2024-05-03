import React from "react";
import { FaCloudMoon } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className=" bg-[#502314] text-white px-6 md:p-0">
      <div className=" flex gap-6 md:px-10 md:py-4 lg:px-40" >
        <div className=" flex gap-4 items-center">
          <h5>High contrast</h5>
          <FaCloudMoon className=" cursor-pointer" />
        </div>
        <div className=" flex flex-col py-3 md:flex-row md:gap-3">
          <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
            Terms and Conditions
          </a>
          <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
            Privacy policy
          </a>
          <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
            Home
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row  lg:flex lg:justify-between lg:flex-row lg:py-8 lg:px-40 md:px-10">
        <div className=" text-xl font-FlameBold w-60">BURGER KING</div>
        <div className=" flex flex-col gap-10 pb-10 md:flex-row md:gap-20 md:ml-20 lg:pr-20">
          <div className=" flex flex-col gap-3">
            <h1 className="text-[14px] font-FlameBold">
              BK<span className="text-[10px]">©</span> INFO
            </h1>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              About BK
            </a>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              Privacy policy
            </a>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              Reach out to US
            </a>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              Terms and Conditions
            </a>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-[14px] font-FlameBold">
              BK<span className="text-[10px]">©</span> Cares
            </h1>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              Allergens Info
            </a>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              Food Quality
            </a>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              Responsibility
            </a>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-[14px] font-FlameBold">
              BK<span className="text-[10px]">©</span> and YOU
            </h1>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              Careers
            </a>
            <a className=" text-[#f0ddc0d8] text-[14px] cursor-pointer hover:text-[red]">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
      <div className=" pb-5 md:flex md:justify-between md:px-10 lg:px-40 md:py-8">
        <p className="text-[#f0ddc0d8] text-[14px]">
          TM & Copyright 2021 Burger King Corporation. All Rights Reserved.
        </p>
        <div className=" flex gap-5">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};
