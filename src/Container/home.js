import React, { useState } from "react";
import styles from "./styles/home.module.css";
import { useSelector } from "react-redux";
import Dashboard from "../Component/Dashboard";
import Messages from "../Component/Messages";
import ChatScreen from "../Component/ChatScreen";
import ChatPlaceholder from "../Component/ChatPlaceholder";

function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [chatInfo, setChatInfo] = useState(null);

  const handleMessage = (data) => {
    setChatInfo(data);
    // console.log(data);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.dashboard}>
        <Dashboard />
      </div>
      <div className={styles.left}>
        <Messages handleMessage={handleMessage} />
      </div>
      <div className={styles.centre}>
        {chatInfo ? <ChatScreen chatInfo={chatInfo} /> : <ChatPlaceholder />}
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Home;
