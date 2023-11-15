import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <main className="md:flex md:justify-center h-full w-full   md:py-[20px] md:px-[100px]">
      <section className="flex items-center mt-[10px] transition duration-300 ease-in-out hover:scale-110 cursor-pointer md:px-[7px] md:py-[20px] py-[15px] px-[10px] rounded-[4px]  mx-[10px]  md:justify-between bg-[#d48888] md:w-[220px]">
        <div className="md:px-[1px] px-[3px] mr-[3px] ">
          <Image
            src="/assets/images/free-delivery.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className="font-semibold "> Free Shipping</p>
          <p className="text-xs">Lorem ipsum dolor sit amet .</p>
        </div>
      </section>
      <section className="flex items-center mt-[10px] transition duration-300 ease-in-out hover:scale-110 cursor-pointer md:px-[7px] md:py-[20px] py-[15px] px-[10px] rounded-[4px]  mx-[10px] md:justify-between bg-[#d188d4] md:w-[220px]">
        <div className="md:px-[1px] px-[3px] mr-[3px] ">
          <Image
            src="/assets/images/easy-return.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className="font-semibold">Easy Return</p>
          <p className="text-xs">Lorem ipsum dolor sit amet .</p>
        </div>
      </section>
      <section className="flex items-center mt-[10px] transition duration-300 ease-in-out hover:scale-110 cursor-pointer md:px-[7px] md:py-[20px] py-[15px] px-[10px] rounded-[4px]  mx-[10px]  md:justify-between bg-[#d4c088] md:w-[220px]">
        <div className="md:px-[1px] px-[3px] mr-[3px] ">
          <Image
            src="/assets/images/shield.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className="font-semibold">Secure Payment</p>
          <p className="text-xs">Lorem ipsum dolor sit amet .</p>
        </div>
      </section>
      <section className="flex items-center mt-[10px] transition duration-300 ease-in-out hover:scale-110 cursor-pointer md:px-[7px] md:py-[20px] py-[15px] px-[10px] rounded-[4px]  mx-[10px]  md:justify-between bg-[#95d488] md:w-[220px]">
        <div className="md:px-[1px] px-[3px] mr-[3px] ">
          <Image
            src="/assets/images/profit.png"
            alt=""
            width={40}
            height={40}
          />
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
