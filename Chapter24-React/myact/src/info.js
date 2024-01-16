import React, { useState } from "react";
import "./styles/style.css";

const Info = () => {
  let [name, setName] = useState("小明");
  let age = 20;
  const changeNameHandler = () => {
    setName("小明星");
  };
  return (
    <div className="info">
      <h1>名稱:{name}</h1>
      <h1>年紀:{age}</h1>
      <button onClick={changeNameHandler}>改名按鈕</button>
    </div>
  );
};

export default Info;
