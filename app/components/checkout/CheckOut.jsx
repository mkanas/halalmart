"use client";

import React from "react";
import { useSelector } from "react-redux";
import BgShop from "../UI/bgshop/BgShop";

const CheckOut = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <main className="bg-white  ">
      <BgShop title="Checkout" />
      <div className="flex py-[50px] justify-center">
        <div className=" md:flex border-l-orange-300 md:gap-[100px] md:justify-around">
          <section>
            <h1 className="font-semibold">Billing Information</h1>
            <div className="">
              <input
                className="md:w-[500px] w-[350px] border text-xs py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[10px]"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <input
                className="md:w-[500px] w-[350px] border text-xs py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <input
                className="md:w-[500px] w-[350px] border text-xs py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                className="md:w-[500px] w-[350px] border text-xs py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                type="text"
                placeholder="Street Address"
              />
            </div>
            <div>
              <input
                className="md:w-[500px] w-[350px] border text-xs py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                type="text"
                placeholder="City"
              />
            </div>
            <div>
              <input
                className="md:w-[500px] w-[350px] border text-xs py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                type="text"
                placeholder="Postal Code"
              />
            </div>
            <div>
              <input
                className="md:w-[500px] w-[350px] border text-xs py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                type="text"
                placeholder="Country"
              />
            </div>
          </section>
          <section className=" flex justify-center  ">
            <div className="bg-[#1d1431] mt-[35px] md:w-[270px] w-[350px] rounded-md h-[200px] p-3">
              <div className="text-white text-xs ">
                <h6 className="flex align-middle justify-between">
                  Total Qty:<span>{totalQty} items</span>
                </h6>
                <h6 className="flex align-middle mt-2  justify-between">
                  Subtotal:<span>${totalAmount}</span>
                </h6>

                <h6 className="flex align-middle mt-2 items-center justify-between">
                  Free <br /> Shipping:<span>$0</span>
                </h6>
                <h4 className="flex align-middle border-t-[1px] pt-4 mt-3 text-[18px] justify-between">
                  Total Cost:<span>${totalAmount}</span>
                </h4>
              </div>
              <div className="flex items-center justify-center ">
                <button className=" text-xs font-semibold mt-[20px] text-black broder w-[90%] bg-white px-[3px] py-[6px] border-white rounded-[4px]">
                  Place an Order
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
