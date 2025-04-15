"use client";

import React from "react";
import { useState, useEffect } from "react";

function Clock() {
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [seconds, setSeconds] = useState([]);

  let interval;
  const countDown = () => {
    const destination = new Date("Jan 15, 2026").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;

      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <main className="md:flex md:justify-start md:ml-[-1px] ml-[8px] flex justify-center w-full">
      <section className="text-white items-center  w-[66px] flex justify-start">
        <div className="text-[20px] text-center leading-4">
          <p>{days}</p>
          <span className="text-xs">Days</span>
        </div>
        <div className="ml-[8px]">:</div>
      </section>
      <section className="text-white items-center  w-[66px] flex justify-start">
        <div className="text-[20px] text-center leading-4">
          <p>{hours}</p>
          <span className="text-xs">Hours</span>
        </div>
        <div className="ml-[8px]">:</div>
      </section>
      <section className="text-white items-center  w-[66px] flex justify-start">
        <div className="text-[20px] text-center leading-4">
          <p>{minutes}</p>
          <span className="text-xs">Minutes</span>
        </div>
        <div className="ml-[8px]">:</div>
      </section>
      <section className="text-white items-center  w-[66px] flex justify-start">
        <div className="text-[20px] text-center leading-4">
          <p>{seconds}</p>
          <span className="text-xs">Seconds</span>
        </div>
      </section>
    </main>
  );
}

export default Clock;
