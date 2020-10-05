import React from "react";
import "./styles/SlidingScreen.css";

function SlidingScreen(props) {
  const { isLeft } = props;
  const myStyle = !isLeft
    ? {
        right: "0",
      }
    : {
        left: "0",
      };
  console.log(myStyle);

  return <div className="screen" style={myStyle}></div>;
}

export default SlidingScreen;
