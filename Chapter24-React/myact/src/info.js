// import React, { useState } from "react";
import "./styles/style.css";

const Info = ({ messages, setMessages }) => {
  return (
    <div className="info">
      {messages.map((m, index) => (
        <p key={index}>學習內容:{m}</p>
      ))}
    </div>
  );
};

export default Info;
