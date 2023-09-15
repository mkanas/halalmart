"use client";

import React from "react";
import Image from "next/image";
import { AiFillPlusCircle } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductCard = ({ items }) => {
  return (
    <section className="cursor-pointer items-center ">
      <div className="transition duration-300 ease-in-out hover:scale-85  ">
        <Image src={items.imgUrl} alt="" width={225} />
      </div>
      <div className="leading-4 ">
        <Link href={`http://localhost:3000/components/shop/${items.id}`}>
          <h3 className="font-semibold"> {items.productName}</h3>
        </Link>
        <span className="text-[12px] inline-block">{items.category}</span>
      </div>
      <div className="flex justify-between  mt-[10px] items-center">
        <p>{items.price}</p>
        <motion.span whileTap={{ scale: 1.2 }}>
          <AiFillPlusCircle />
        </motion.span>
      </div>
    </section>
  );
};

export default ProductCard;
