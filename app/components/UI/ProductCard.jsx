"use client";

import React from "react";
import Image from "next/image";
import { AiFillPlusCircle } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "@/app/redux/features/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ items }) => {
  const disptach = useDispatch();

  const addToCart = () => {
    disptach(
      cartActions.addItem({
        id: items.id,
        productName: items.productName,
        price: items.price,
        image: items.imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <section className="cursor-pointer items-center ">
      <div className="leading-4 ">
        <Link href={`/components/shop/${items.id}`}>
          <div className="transition duration-300 ease-in-out hover:scale-85  ">
            <Image
              src={items.imgUrl}
              alt=""
              className="md:w-[225px] w-[340px]"
            />
          </div>
          <h3 className="font-semibold"> {items.productName}</h3>
        </Link>
        <span className="text-[12px] inline-block">{items.category}</span>
      </div>
      <div className="flex justify-between  mt-[10px] items-center">
        <p className="md:text-base text-[18px] font-semibold">${items.price}</p>
        <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
          <AiFillPlusCircle size={20} />
        </motion.span>
      </div>
    </section>
  );
};

export default ProductCard;
