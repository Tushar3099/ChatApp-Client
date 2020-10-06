import React from "react";
import styles from "./styles/home.module.css";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className={styles.mainContainer}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
