import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="flex justify-center w-full items-center ">
      <div className=" grid grid-cols-4 gap-4 ">
        {data?.map((items) => (
          <ProductCard items={items} key={items.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
