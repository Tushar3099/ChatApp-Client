import React, { useState, useEffect } from "react";
import styles from "./styles/ChatPlaceholder.module.css";
import { useSelector } from "react-redux";
import { AiOutlineDropbox } from "react-icons/ai";

function ChatPlaceholder() {
  return (
    <div className={styles.container}>
      <AiOutlineDropbox size={200} color={"#ea4b4b"} />
      <div>Explore friends and connect with them !!</div>
    </div>
  );
}

export default ChatPlaceholder;
