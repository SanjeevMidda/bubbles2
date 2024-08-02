import React from "react";
import { useState } from "react";

const Link = ({ text, color }) => {
  const [condition, setCondition] = useState(false);

  let circleStyles = {
    backgroundColor: `${condition ? color : "black"}`,
  };

  return (
    <div className="linkComponent" onMouseLeave={() => setCondition(false)}>
      <div className="circle" style={circleStyles}></div>
      <h3 onMouseEnter={() => setCondition(true)}>{text}</h3>
    </div>
  );
};

export default Link;
