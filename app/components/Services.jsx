import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <main className="flex justify-around  h-full w-full  py-[20px] px-[160px]">
      <section className="flex items-center transition duration-300 ease-in-out hover:scale-110 cursor-pointer px-[5px] py-[15px] rounded-[4px] mx-[5px] justify-around bg-[#d48888] w-[220px]">
        <div className="px-[1px] ">
          <Image
            src="/assets/free-delivery.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className="font-semibold"> Free Shipping</p>
          <p className="text-xs">Lorem ipsum dolor sit amet .</p>
        </div>
      </section>
      <section className="flex items-center transition duration-300 ease-in-out hover:scale-110 cursor-pointer px-[5px]  rounded-[4px] mx-[5px] justify-around bg-[#d188d4] w-[220px]">
        <div className="px-[1px] ">
          <Image src="/assets/easy-return.png" alt="" width={40} height={40} />
        </div>
        <div>
          <p className="font-semibold">Easy Return</p>
          <p className="text-xs">Lorem ipsum dolor sit amet .</p>
        </div>
      </section>
      <section className="flex items-center transition duration-300 ease-in-out hover:scale-110 cursor-pointer px-[5px]  rounded-[4px] mx-[5px] justify-around bg-[#d4c088] w-[220px]">
        <div className="px-[1px] ">
          <Image src="/assets/shield.png" alt="" width={40} height={40} />
        </div>
        <div>
          <p className="font-semibold">Secure Payment</p>
          <p className="text-xs">Lorem ipsum dolor sit amet .</p>
        </div>
      </section>
      <section className="flex items-center transition duration-300 ease-in-out hover:scale-110 cursor-pointer px-[5px]  rounded-[4px] mx-[5px] justify-around bg-[#95d488] w-[220px]">
        <div className="px-[1px] ">
          <Image src="/assets/profit.png" alt="" width={40} height={40} />
        </div>
        <div>
          <p className="font-semibold">Back Guarantee</p>
          <p className="text-xs">Lorem ipsum dolor sit amet .</p>
        </div>
      </section>
    </main>
  );
};

export default Services;
