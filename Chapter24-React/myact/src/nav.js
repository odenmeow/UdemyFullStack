import React from "react";

const nav = () => {
  return (
    <nav style={{ backgroundColor: "lightpink" }}>
      <ul>
        <li>
          {
            // eslint-disable-next-line
            <a href="#" style={{ color: "red" }}>
              首頁
            </a>
          }
        </li>
        <li>
          {
            // eslint-disable-next-line
            <a href="#">另一個頁面</a>
          }
        </li>
      </ul>
    </nav>
  );
};

export default nav;
