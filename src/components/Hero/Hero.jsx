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
        <a href="https://drive.google.com/file/d/13N3JhSnwt7fITRYQPW5zred2tckaMvHt/view" className={styles.contactBtn}>
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
