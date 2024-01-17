import { useState, useEffect } from "react";
function App() {
  let [myName, setMyName] = useState("Oni");
  const buttonHandler = () => {
    setMyName("Umi");
  };
  useEffect(() => {
    console.log("useEffect內部的fn執行中");
  }, [myName]);
  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={buttonHandler}>改變姓名</button>
    </div>
  );
}

export default App;
