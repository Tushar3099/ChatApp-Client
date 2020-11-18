import React from "react";
import styles from "./styles/Dashboard.module.css";
import { useSelector } from "react-redux";
import {
  MdInput,
  MdSettings,
  MdChatBubbleOutline,
  MdSearch,
} from "react-icons/md";

import { AiOutlineUser } from "react-icons/ai";
function Dashboard() {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profile}>
        <img alt={`Image`} src={user.image} className={styles.image} />
      </div>
      <div className={styles.item}>
        <MdChatBubbleOutline style={{ color: "#ea4b4b", fontSize: "1.2em" }} />
      </div>
      <div className={styles.item}>
        <MdSearch style={{ color: "white", fontSize: "1.3em" }} />
      </div>
      <div className={styles.item}>
        <AiOutlineUser style={{ color: "white", fontSize: "1.3em" }} />
      </div>
      <div className={styles.bottom}>
        <MdSettings
          style={{ color: "white", fontSize: "1.2em", marginBottom: "1em" }}
        />
        <MdInput style={{ color: "white", fontSize: "1.2em" }} />
      </div>
    </div>
  );
}

export default Dashboard;
