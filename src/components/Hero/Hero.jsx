import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shrey </h1>
        <p className={styles.description}>
          I'm a full-stack developer with 3 years of experience using MERN stack development. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1O5KNkFnvTIJiCQ5m2tNFv7Lm1_9XchUM/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
