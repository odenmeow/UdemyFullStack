import React from "react";
import "./styles/style.css";

const info = (props) => {
  console.log(props);
  return (
    <div className="info">
      <h1>名稱:{props.name}</h1>
      <h1>年紀:{props.age}</h1>
    </div>
  );
};

export default info;
