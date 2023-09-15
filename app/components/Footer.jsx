"use client";

import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white w-full bg-[#130e2c] pt-[20px] ">
      <main className=" flex py-[10px] justify-center items-center ">
        <div className="w-[80%] flex justify-around ">
          <section className="w-[30%]">
            <div>
              <h1 className="font-semibold">HalalMart</h1>
              <p className="text-xs leading-6 font-extralight pt-[10px] text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati rem iure placeat deserunt?Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </section>
          <section className="w-[20%]">
            <h1 className="font-semibold">Top Categories</h1>
            <ul className="text-xs leading-7 font-extralight pt-[10px]">
              <li>Mobile Phones</li>
              <li>Modern Sofa</li>
              <li>Arm Chair</li>
              <li>Smart Watches</li>
            </ul>
          </section>
          <section className="w-[20%]">
            <h1 className="font-semibold">Useful Links</h1>
            <ul className="text-xs leading-7 font-extralight pt-[10px]">
              <li>Shop</li>
              <li>Cart</li>
              <li>Login</li>
              <li>Privacy Policy</li>
            </ul>
          </section>
          <section className="w-[20%]">
            <h1 className="font-semibold">Contact</h1>
            <ul className="leading-7 font-extralight text-xs pt-[10px]">
              <li className="flex items-center ">
                <IoLocationOutline />

                <span className="pl-[7px]">
                  123 Cimahi, Bandung, Jawa Barat
                </span>
              </li>
              <li className="flex items-center">
                <FiPhoneCall />
                <span className="pl-[7px]">+62 8234 5678</span>
              </li>
              <li className="flex items-center">
                <AiOutlineMail />
                <span className="pl-[7px]">example23@gmail.com</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <div className="flex justify-center items-center py-[20px]">
        Copyright {year} developed by Anas. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
