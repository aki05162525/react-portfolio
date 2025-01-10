import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Akihiro Takagi</h1>
        <p className={styles.description}>
          横浜国立大学 経済学部 経済学科2年の髙木 章弘です。
          <br />
          アイコンは江ノ島で出会った猫の写真を使用しています。
          <br />
          キャッチコピー「コツコツと常に前進」
        </p>
        <a href="mailto:aki.takagi0516@gmail.com" className={styles.contactBtn}>
          Contact Me
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
