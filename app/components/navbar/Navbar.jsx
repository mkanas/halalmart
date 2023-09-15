"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BiHeart, BiCart } from "react-icons/bi";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navMenu = [
    { name: "Home", id: 1, path: "/" },
    { name: "Shop", id: 2, path: "/components/shop" },
    { name: "Cart", id: 3, path: "/components/cart" },
  ];

  const [navbar, setNavbar] = useState(false);
  const navbarRef = useRef(null);

  const navbarRefFunc = () => {
    window.addEventListener("scroll", () => {
      if (navbarRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navbarRef.current.classList.add(styles.sticky_navbar);
        } else {
          navbarRef.current.classList.remove(styles.sticky_navbar);
        }
      }
    });
  };

  useEffect(() => {
    navbarRefFunc();

    return () => {
      window.removeEventListener("scroll", navbarRefFunc);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="bg-[#ffffff] p-2 w-full  ">
      <main className="md:flex flex justify-between md:justify-around md:items-center">
        <section className="flex  items-center">
          <Image src="/assets/shooping.png" alt="" width={30} height={30} />
          <h3 className="font-bold">HalalMart</h3>
        </section>
        <section className="md:flex md:justify-around hidden  md:w-[200px]">
          {navMenu.map((item) => (
            <div key={item.id}>
              <Link
                href={item.path}
                className="hover:underline-offset-4px focus:font-bold active:font-bold"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </section>
        <section className="flex w-[100px] h-full items-center cursor-pointer justify-around">
          <div className="  w-[35px] relative flex justify-center items-center h-[30px]">
            <BiHeart size={22} />
            <span className="rounded-full  font-semibold items-center px-[5px] top-[5%] right-[4%] text-[9px]  absolute bg-black z-10  text-white ">
              12
            </span>
          </div>
          <div className=" w-[35px] relative flex justify-center items-center h-[30px]">
            <BiCart size={22} />
            <span className="rounded-full font-semibold items-center px-[5px] top-[5%] right-[4%] text-[9px]  absolute bg-black z-10  text-white ">
              2
            </span>
          </div>

          <div className="transition duration-300 ml-[6px] ease-in-out hover:scale-125">
            <Image src="/assets/user-icon.png" alt="" width={35} height={35} />
          </div>
        </section>
      </main>

      {/* Hamburger Button For Mobile */}
      <section className="block absolute md:hidden h-full w-[200px]">
        <button className="p-2 " onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <Image src="/assets/close.png" alt="menu" width={25} height={30} />
          ) : (
            <Image src="/assets/menu.png" alt="close" width={25} height={30} />
          )}
        </button>

        {navMenu.map((item) => (
          <div
            key={item.id}
            className={` left-0 bg-white text-xs p-3  h-full absolute transition-all ease-in duration-300 ${
              navbar
                ? "top-[20px] opacity-100 "
                : "top-0 transform -translate-y-full md:opacity-100 opacity-0"
            }`}
          >
            <Link
              href={item.path}
              className="hover:underline-offset-4px focus:font-bold active:font-bold"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
