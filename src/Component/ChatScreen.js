import React, { useState, useEffect } from "react";
import styles from "./styles/ChatScreen.module.css";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FiNavigation } from "react-icons/fi";
import { chat } from "../common/chatSingle";

function ChatScreen(props) {
  const [messages, setMessage] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setMessage(chat.messages);
  }, []);

  const renderMessages = messages.map((item, index) => {
    return item.sender === user._id ? (
      <div className={styles.rightMessage}>{item.content.text}</div>
    ) : (
      <div className={styles.leftMessage}>{item.content.text}</div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h3 className={styles.name}>{props.chatInfo.name}</h3>
          <div className={styles.activity}>
            <div className={styles.dot}></div>
            <h5 className={styles.status}>Active now</h5>
          </div>
        </div>
      </div>
      <div className={styles.centre}>{renderMessages}</div>
      <div className={styles.bottom}>
        <textarea
          rows={1}
          className={styles.input}
          placeholder="Your message here..."
        />
        <div className={styles.send}>
          <FiNavigation height={20} width={20} color={"white"} />
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
