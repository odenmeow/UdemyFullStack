import React, { useState } from "react";
// 下面是因為傳入是object所以解構
const Create = ({ messages, setMessages }) => {
  let [input, setInput] = useState("");
  const submitButtonHandler = (e) => {
    e.preventDefault();
    // let v = e.target.parentElement.querySelector("input").value;
    // 取得text input文字.... 改用監聽onChange比較能看出差異
    setMessages([...messages, input]);
    setInput(""); //按鈕後清空input
  };
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={submitButtonHandler}>Submit</button>
    </form>
  );
};

export default Create;
