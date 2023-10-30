import React from "react";
import products from "@/public/assets/data/products";
import BgShop from "../../UI/bgshop/BgShop";
import SectionReview from "./SectionReview";
import ProductList from "../../UI/ProductList";
import SectionBody from "./SectionBody";

const DetailPage = ({ params }) => {
  const productid = params.productid;
  const product = products.find((item) => item.id === productid);

  const {
    imgUrl,
    productName,
    avgRating,
    price,
    reviews,
    shortDesc,
    description,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  return (
    <main className="text-black w-full pb-[50px] min-h-[600px]  bg-white">
      <BgShop title={productName}></BgShop>
      <SectionBody
        imgUrl={imgUrl}
        avgRating={avgRating}
        price={price}
        shortDesc={shortDesc}
        productName={productName}
      />
      <SectionReview description={description} reviews={reviews} />
      <div className="mt-[20px]">
        <h1 className="text-center text-[28px] py-[30px]">You Also Might</h1>
        <div>
          <ProductList data={relatedProducts} />
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
