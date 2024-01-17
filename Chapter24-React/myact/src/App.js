// import Nav from "./nav";
import Info from "./info";
import Create from "./Create";
import { useState } from "react";
function App() {
  let [messages, setMessages] = useState([]); //初始值為空arr

  return (
    <div>
      <Create messages={messages} setMessages={setMessages} />
      <Info messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
