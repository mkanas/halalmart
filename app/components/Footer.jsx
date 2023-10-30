"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerMenu = [
    { name: "Shop", id: 1, path: "/components/shop" },
    { name: "Login", id: 2, path: "/components/login" },
    { name: "Cart", id: 3, path: "/components/cart" },
    { name: "Privacy Policy", id: 4, path: "/" },
  ];
  const catMenu = [
    { name: "Mobile Phone", id: 1 },
    { name: "Modern Sofa", id: 2 },
    { name: "Arm Chair", id: 3 },
    { name: "Smart Watches", id: 4 },
  ];

  return (
    <footer className="text-white w-full h-full bg-[#130e2c] pt-[20px] ">
      <main className=" md:flex py-[10px] ml-[10px] md:justify-center items-center ">
        <div className="w-[80%] md:flex md:justify-around ">
          <section className="md:w-[30%]">
            <div>
              <h1 className="font-semibold md:text-base md:mt-[-1px] mt-4 text-lg">
                HalalMart
              </h1>
              <p className="md:text-xs leading-6 font-extralight pt-[10px] text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati rem iure placeat deserunt?Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </section>
          <section className="md:w-[20%] ">
            <h1 className="font-semibold md:text-base md:mt-[-1px] mt-4 text-lg">
              Top Categories
            </h1>
            <ul className="md:text-xs leading-7 font-extralight pt-[10px]">
              {catMenu.map((items) => (
                <li key={items.id} className="leading-6">
                  {items.name}
                </li>
              ))}
            </ul>
          </section>
          <section className="md:w-[20%]">
            <h1 className="font-semibold md:text-base md:mt-[-1px] mt-4 text-lg">
              Useful Links
            </h1>
            <ul className="md:text-xs leading-7 font-extralight pt-[10px]">
              {footerMenu.map((items) => (
                <li key={items.id}>
                  <Link href={items.path} className="leading-6">
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="md:w-[20%]">
            <h1 className="font-semibold md:text-base md:mt-[-1px] mt-4 text-lg">
              Contact
            </h1>
            <ul className="leading-7 font-extralight md:text-xs pt-[10px]">
              <li className="flex items-center leading-6 ">
                <IoLocationOutline />

                <span className="pl-[7px]">
                  123 Cimahi, Bandung, Jawa Barat
                </span>
              </li>
              <li className="flex items-center leading-6">
                <FiPhoneCall />
                <span className="pl-[7px]">+62 8234 5678</span>
              </li>
              <li className="flex items-center leading-6">
                <AiOutlineMail />
                <span className="pl-[7px]">example23@gmail.com</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <div className="flex justify-center text-center items-center py-[20px]">
        Copyright {year} developed by Anas. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
