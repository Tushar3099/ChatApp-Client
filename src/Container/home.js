import React from "react";
import styles from "./styles/home.module.css";
import { useSelector } from "react-redux";
import Dashboard from "../Component/Dashboard";
import Messages from "../Component/Messages";

function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.dashboard}>
        <Dashboard />
      </div>
      <div className={styles.left}>
        <Messages />
      </div>
      <div className={styles.centre}></div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Home;
