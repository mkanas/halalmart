"use client";

import React from "react";
import BgShop from "../UI/bgshop/BgShop";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { cartActions } from "@/app/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <main className="text-black  w-full ">
      <BgShop title="Shopping Cart" />
      <div className="md:flex md:justify-around ">
        <section className="md:flex md:justify-center mt-8 text-black items-center">
          {cartItems.length === 0 ? (
            <h2 className=" flex justify-center text-center">
              No Item added to the cart
            </h2>
          ) : (
            <table className="table  border md:w-[800px] ">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {cartItems.map((item, index) => (
                  <Tr item={item} key={index} />
                ))}
              </tbody>
            </table>
          )}
        </section>
        <section className="pt-8 pb-[20px] ">
          <div className="ml-[10px] md:ml-0">
            <h6 className="font-semibold">Subtotal :</h6>
            <span className="font-semibold">${totalAmount}</span>
            <p className="my-[5px] text-xs ">
              Taxes and shipping will calculate in checkout{" "}
            </p>
          </div>
          <div className=" md:mb-[20px] flex justify-center mt-[10px] ">
            <div>
              <button className="p-[7px] transition cursor-pointer duration-100 ease-in-out active:scale-110   rounded-[4px]  items-center flex justify-center text-white w-[300px] md:w-[270px] bg-[#1d1431]">
                <Link href="/components/shop">Continue Shopping</Link>
              </button>
              <button className="p-[7px] md:mt-[10px] mt-[7px] transition cursor-pointer duration-100 ease-in-out active:scale-110  rounded-[4px]  items-center flex justify-center text-white w-[300px] md:w-[270px] bg-[#1d1431]">
                <Link href="/components/checkout">Checkout</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <Image
          className="ml-[35px]"
          src={item.imgUrl}
          width={100}
          height={80}
          alt=""
        />
      </td>
      <td className="text-center">{item.productName}</td>
      <td className="text-center">${item.price}</td>
      <td className="text-center">{item.quantity} pck</td>
      <td className="" onClick={() => deleteProduct()}>
        <AiTwotoneDelete className="cursor-pointer ml-[35px]" />
      </td>
    </tr>
  );
};

export default Cart;
