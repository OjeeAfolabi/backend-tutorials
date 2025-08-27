import React from "react";
import styles from "./page.module.css";
const Hello = () => {
  return (
    <div>
      <p className={styles.title}> Module CSS</p>
      <button className={styles.button}>Click</button>
    </div>
  );
};

export default Hello;
