"use client";
import React from "react";
import BgShop from "../UI/bgshop/BgShop";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import products from "@/public/assets/data/products";
import ProductList from "../UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filterProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "mobile") {
      const filterProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "chair") {
      const filterProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "watch") {
      const filterProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "wireless") {
      const filterProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchProducts);
  };

  return (
    <main className="text-white bg-white ">
      <BgShop title="Products" />
      <section className="md:flex md:justify-around md:w-full items-center md:py-[30px]">
        <div className="flex  py-[10px] gap-[10px] justify-around ">
          <select
            onChange={handleFilter}
            className="py-[5px] px-[15px] cursor-pointer text-sm bg-[#130e2c] border rounded-sm"
          >
            <option className="text-[10px]">Filter by Category</option>
            <option className="text-[10px]" value="sofa">
              Sofa
            </option>
            <option className="text-[10px]" value="mobile">
              Mobile
            </option>
            <option className="text-[10px]" value="chair">
              Chair
            </option>
            <option className="text-[10px]" value="watch">
              Watch
            </option>
            <option className="text-[10px]" value="wireless">
              wireless
            </option>
          </select>

          <select className="py-[5px] px-[15px] cursor-pointer text-sm bg-[#130e2c] border rounded-sm">
            <option className="text-[10px]">Sort By </option>
            <option className="text-[10px]" value="ascending">
              Ascending
            </option>
            <option className="text-[10px]" value="descending">
              Descending
            </option>
          </select>
        </div>
        <div className="flex justify-center">
          <div className=" text-black border justify-center my-[10px] w-[90%] border-slate-300  rounded-sm md:w-full items-center align-middle flex">
            <input
              onChange={handleSearch}
              className="w-full md:py-1 text-sm mx-[8px] py-2  outline-none"
              type="text"
              placeholder="Search..."
            />
            <span className=" cursor-pointer text-center px-[3px]">
              <BiSearchAlt2 size={22} />
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="text-black">
          {productsData.length === 0 ? (
            <h1 className="text-center text-lg py-[20px]">
              No Products are Found!
            </h1>
          ) : (
            <ProductList data={productsData} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;
