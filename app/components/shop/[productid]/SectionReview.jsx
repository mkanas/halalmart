"use client";

import React, { useState, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";

const SectionReview = ({ reviews, description }) => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const submitReview = reviewUser.current.value;
    const submitMsg = reviewMsg.current.value;

    const reviewObj = {
      username: submitReview,
      review: submitMsg,
      rating,
    };
    toast.success("Review Submitted");

    console.log(reviewObj);
  };

  return (
    <section className="md:px-[50px] px-[15px] md:w-full  text-black  ">
      <div className="flex justify-start text-[17px]  py-[15px] ">
        <h6
          className={`${
            tab === "desc"
              ? "mr-[10px] cursor-pointer font-semibold"
              : "cursor-pointer "
          }`}
          onClick={() => setTab("desc")}
        >
          Description
        </h6>
        <h6
          className={`${
            tab === "rev"
              ? "mx-[10px] cursor-pointer font-semibold"
              : "cursor-pointer "
          }`}
          onClick={() => setTab("rev")}
        >
          Review ({reviews.length})
        </h6>
      </div>
      {tab === "desc" ? (
        <div>
          <p className="text-sm text-justify">{description}</p>
        </div>
      ) : (
        <div className="text-sm ">
          <ul>
            {reviews?.map((item, index) => (
              <li key={index}>
                <span className="text-[#f8aa36]">{item.rating} (Rating)</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-center w-[700] py-[30px] my-[10px">
            <form onSubmit={submitHandler}>
              <h2 className="font-semibold">Leave Your Experience</h2>
              <div className="pt-[20px]">
                <input
                  required
                  ref={reviewUser}
                  type="text"
                  placeholder="Enter Your Name..."
                  className="md:w-full w-[350px] md:border border rounded border-[#7a7777] md:border-[#7a7777] md:rounded py-[5px] px-[15px]"
                />
              </div>
              <div className="text-black flex gap-5 items-center py-[20px] ">
                <span
                  className="flex cursor-pointer items-center"
                  onClick={() => {
                    setRating(1);
                  }}
                >
                  1 <AiFillStar style={{ color: "#f8aa36" }} />
                </span>
                <span
                  className="flex cursor-pointer items-center"
                  onClick={() => {
                    setRating(2);
                  }}
                >
                  2 <AiFillStar style={{ color: "#f8aa36" }} />
                </span>
                <span
                  className="flex cursor-pointer items-center"
                  onClick={() => {
                    setRating(3);
                  }}
                >
                  3 <AiFillStar style={{ color: "#f8aa36" }} />
                </span>
                <span
                  className="flex cursor-pointer items-center"
                  onClick={() => {
                    setRating(4);
                  }}
                >
                  4 <AiFillStar style={{ color: "#f8aa36" }} />
                </span>
                <span
                  className="flex cursor-pointer items-center"
                  onClick={() => {
                    setRating(5);
                  }}
                >
                  5 <AiFillStar style={{ color: "#f8aa36" }} />
                </span>
              </div>
              <textarea
                ref={reviewMsg}
                required
                type="text"
                row={4}
                placeholder="Review Your Message..."
                className="md:w-[700px] border rounded border-[#7a7777] w-[350px] h-[100px] md:h-[150px] md:border-[#7a7777] p-[15px] md:border md:rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              ></textarea>
              <button className="p-[7px] mt-[20px] transition duration-100 ease-in-out active:scale-110  rounded-[4px] items-center flex justify-center text-white w-[100px] md:w-[120px] bg-[#1d1431]">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionReview;
