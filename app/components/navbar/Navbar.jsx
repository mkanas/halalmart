"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BiHeart, BiCart } from "react-icons/bi";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import useAuth from "@/app/custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase.config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const navMenu = [
    { name: "Home", id: 1, path: "/" },
    { name: "Shop", id: 2, path: "/components/shop" },
    { name: "Cart", id: 3, path: "/components/cart" },
  ];

  const [navbar, setNavbar] = useState(false);
  const navbarRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { currentUser } = useAuth();
  const profileActionRef = useRef(null);
  const router = useRouter();

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

  const toggleProfileReffFunc = () => {
    profileActionRef.current.classList.toggle(styles.show_profileActions);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Your account has been logged out");
        router.push("http://localhost:3000/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    navbarRefFunc();

    return () => {
      window.removeEventListener("scroll", navbarRefFunc);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="bg-[#ffffff] p-2  w-full  ">
      <main className="md:flex flex justify-between md:justify-around md:items-center">
        <section className="flex  items-center">
          <Image
            src="/assets/images/shooping.png"
            alt="mall icon"
            width={30}
            height={30}
          />
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
        <section className="flex w-[150px] h-full items-center  justify-center">
          <div className="  w-[35px] relative flex cursor-pointer justify-center items-center h-[30px]">
            <BiHeart size={22} />
            <span className="rounded-full  font-semibold items-center px-[5px] top-[5%] right-[4%] text-[9px]  absolute bg-black z-10  text-white ">
              12
            </span>
          </div>
          <div className=" w-[35px] relative flex cursor-pointer justify-center items-center h-[30px]">
            <Link href="/components/cart">
              <BiCart size={22} />
            </Link>
            <span className="rounded-full font-semibold items-center px-[5px] top-[5%] right-[4%] text-[9px]  absolute bg-black z-10  text-white ">
              {totalQuantity}
            </span>
          </div>

          <div className="transition cursor-pointer duration-100 ease-in-out active:scale-110 relative ml-[6px] ">
            {
              <Image
                src={
                  currentUser?.photoURL
                    ? currentUser?.photoURL
                    : "/assets/images/user-icon.png"
                }
                alt="user image"
                width={25}
                height={25}
                onClick={toggleProfileReffFunc}
              />
            }
            <div
              className={styles.profile_actions}
              ref={profileActionRef}
              onClick={toggleProfileReffFunc}
            >
              {currentUser ? (
                <span onClick={logout}>Logout</span>
              ) : (
                <div className="flex justify-center flex-col   ">
                  <Link href="/components/signup">Signup</Link>

                  <Link
                    className=" border-t-[1px] border-black"
                    href="/components/login"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className=" md:hidden">
            <button
              className="p-2 w-[35px] "
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image
                  src="/assets/images/cross.png"
                  alt="cross"
                  width={20}
                  height={10}
                />
              ) : (
                <Image
                  src="/assets/images/menu.png"
                  alt="menu"
                  width={30}
                  height={20}
                />
              )}
            </button>
          </div>
        </section>
      </main>
      <div
        className={`right-0 bg-white text-sm h-screen p-3 w-[35%] absolute transition-all ease-in duration-300 font-font-family ${
          navbar
            ? "top-[49px] opacity-100 "
            : "top-[-1490px] md:opacity-100 opacity-0"
        } `}
      >
        <div className="mt-[190px] text-center bg-white leading-8">
          {navMenu.map((item) => (
            <div key={item.id} className=" ">
              <Link
                href={item.path}
                className="hover:underline-offset-4px focus:font-bold active:font-bold"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
