"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Services from "../components/Services";
import ProductList from "../components/UI/ProductList";
import products from "@/public/assets/data/products";
import Clock from "../components/UI/Clock";
import { Container, Row, Col } from "reactstrap";

export const metadata = {
  title: "HalalMart - Home",
  description: "This page of Home",
};

const Home = () => {
  const [dataTrending, setDataTrending] = useState([]);
  const [dataBestSaler, setDataBestSaler] = useState([]);
  const [dataMobile, setDataMobile] = useState([]);
  const [dataWireless, setDataWireless] = useState([]);
  const [dataWatch, setDataWatch] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalerProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredWatchProducts = products.filter(
      (item) => item.category === "watch"
    );

    setDataTrending(filteredTrendingProducts);
    setDataBestSaler(filteredBestSalerProducts);
    setDataMobile(filteredMobileProducts);
    setDataWireless(filteredWirelessProducts);
    setDataWatch(filteredWatchProducts);
  }, []);

  return (
    <main className="bg-white">
      <section className=" h-full w-full flex justify-between bg-[#c7e2e9]">
        <article className="w-1/2 align-middle py-[100px] pl-[100px] items-center">
          <div>
            <p className="font-bold">Trending product in 2023</p>
            <p className="capitalize font-semibold leading-[40px] my-[10px] text-[34px]">
              make your interior more minimalistic & modern
            </p>
            <p className="my-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veniam molestiae voluptate enim perspiciatis impedit.
            </p>
          </div>
          <div className="p-[7px] transition duration-300 ease-in-out hover:scale-110 mt-[20px]  rounded-[4px] items-center flex justify-center text-white w-[120px] bg-[#1d1431]">
            <Link href="http://localhost:3000/components/shop">
              <button className="uppercase">Shop Now</button>
            </Link>
          </div>
        </article>
        <div className="px-[25px] py-[50px] w-1/2">
          <Image src="/assets/hero-img.png" alt="" width={500} height={300} />
        </div>
      </section>
      <Services />
      <section>
        <div className="flex pt-[10px] justify-center items-center font-semibold">
          <h2 className="text-[28px] pt-[20px]">Trending Products</h2>
        </div>
        <ProductList data={dataTrending} />
      </section>
      <section className="mb-[20px]">
        <div className="flex pt-[10px] justify-center items-center font-semibold">
          <h2 className="text-[28px] pt-[20px]">Best Saler Products</h2>
        </div>
        <ProductList data={dataBestSaler} />
      </section>
      <section className="pb-[20px] w-full justify-center items-center flex mt-[20px] bg-[#130e2c] text-white mb-[20px]">
        <div className="w-[70%] flex justify-between ">
          <div className="mt-[30px] w-full">
            <div className="mb-[20px]">
              <h6>Limited Offers</h6>
              <h2>Quality Armchair</h2>
            </div>
            <Clock />
            <div className=" py-[5px] px-[5px] transition duration-300 ease-in-out hover:scale-110 mt-[20px]  rounded-[4px] items-center flex justify-center text-black w-[90px] bg-[#ffffff]">
              <Link href="http://localhost:3000/components/shop">
                <button className="capitalyze font-semibold text-sm">
                  Visit Store
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-[20px]">
            <Image
              src="/assets/images/counter-timer-img.png "
              alt="counter"
              width={280}
              height={280}
            />
          </div>
        </div>
      </section>

      <section className="mb-[20px]">
        <div className="flex pt-[10px] justify-center items-center font-semibold">
          <h2 className="text-[28px] pt-[20px]">New Arrival </h2>
        </div>

        <ProductList data={dataMobile} />
        <ProductList data={dataWireless} />
      </section>
      <section className="pb-[20px]">
        <div className="flex pt-[10px] justify-center items-center font-semibold mb-[10px]">
          <h2 className="text-[28px] pt-[20px]">Popular Products</h2>
        </div>
        <ProductList data={dataWatch} />
      </section>
    </main>
  );
};

export default Home;
