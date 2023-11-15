"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { cartActions } from "@/app/redux/features/cartSlice";
import { toast } from "react-toastify";

const SectionBody = ({
  imgUrl,
  productName,
  avgRating,
  shortDesc,
  price,
  id,
}) => {
  const disptach = useDispatch();

  const addToCart = () => {
    disptach(
      cartActions.addItem({
        id: id,
        productName,
        price,
        image: imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="md:flex md:items-center  flex justify-center items-center md:justify-center">
      <div className="md:w-[80%] md:flex   md:justify-around">
        <section>
          <div className="mt-[30px]">
            <Image src={imgUrl} alt="" width={400} />
          </div>
        </section>
        <section className="md:w-[40%] px-[15px] py-[25px] w-full md:mt-[60px]">
          <h1 className="md:text-[30px]  text-[20px] font-semibold text-black ">
            {productName}
          </h1>
          <div className="flex items-center mt-[5px]  justify-between w-[200px]">
            <div className="flex">
              <AiFillStar style={{ color: "#f8aa36" }} />
              <AiFillStar style={{ color: "#f8aa36" }} />
              <AiFillStar style={{ color: "#f8aa36" }} />
              <AiFillStar style={{ color: "#f8aa36" }} />
              <BiSolidStarHalf style={{ color: "#f8aa36" }} />
            </div>
            <p>
              (<span className="text-[#3deb3d] ">{avgRating} </span>Ratings)
            </p>
          </div>
          <h3 className="font-semibold mt-[5px]">${price}</h3>
          <p className="text-sm mt-[5px]">{shortDesc}</p>
          <div className="p-[7px] transition cursor-pointer duration-100 ease-in-out active:scale-110 my-[20px]  rounded-[4px]  items-center flex justify-center text-white w-[100px] md:w-[120px] bg-[#1d1431]">
            <button className=" text-sm" onClick={() => addToCart()}>
              Add To Cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionBody;
