import React from "react";
import "./styles/style.css";
const something = () => {
  return 100;
};

const info = () => {
  let friends = ["咪咪", "阿橘", "黑皮"];
  return (
    <div className="info">
      <p>朋友:</p>
      {friends.map((friend) => (
        <p>{friend}</p>
      ))}
    </div>
  );
};

export default info;
