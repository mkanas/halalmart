import React from "react";
import Cart from "./Cart";

export const metadata = {
  title: "HalalMart - Cart ",
  description: "This page of Home",
};

const page = () => {
  return (
    <div className="w-full h-full bg-white ">
      <Cart />
    </div>
  );
};

export default page;
