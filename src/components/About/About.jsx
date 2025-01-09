import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Hobby</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="麻雀の写真"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/majong.png")} alt="麻雀の写真" />
            <div className={styles.aboutItemText}>
              <h3>麻雀</h3>
              <p>
                好きな役は立直。
                <br />
                Mリーグ観戦も好きで赤坂ドリブンズを応援しています。
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/active.png")} alt="運動" />
            <div className={styles.aboutItemText}>
              <h3>スポーツ</h3>
              <p>
                球技全般が好きで、今はバスケサークルに所属しています。
                <br />
                中学時代は棒高跳をやっていました。
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/active.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>ほげらほげら</h3>
              <p>hogerahogerahogerahogera</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
