import React from "react";
const something = () => {
  return 100;
};

const info = () => {
  let friends = ["咪咪", "阿橘", "黑皮"];
  return (
    <div>
      <h1>這是info組件</h1>
      <h1>{5 * 10}</h1>
      <h1>{10}</h1>
      <h1>{Math.random()}</h1>
      <h1>{something()}</h1>
      <p>朋友:</p>
      {friends.map((friend) => (
        <p>{friend}</p>
      ))}
    </div>
  );
};

export default info;
