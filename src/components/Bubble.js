import React from "react";

const Bubble = ({ delay }) => {
  let bubbleStyles = {
    animationDelay: delay,
  };

  return <div className="bubble" style={bubbleStyles}></div>;
};

export default Bubble;
