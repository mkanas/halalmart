"use client";

import React from "react";
import styles from "./BgShop.module.css";

const BgShop = ({ title }) => {
  return (
    <section className={styles.bgShop}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
};

export default BgShop;
