import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="flex justify-center w-full items-center ">
      <div className=" md:grid grid md:grid-cols-4 gap-4 ">
        {data?.map((items, index) => (
          <ProductCard items={items} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
