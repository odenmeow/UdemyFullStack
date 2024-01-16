import Nav from "./nav";
import Info from "./info";
function App() {
  let friends = ["咪咪", "阿橘", "黑皮"];
  const buttonHandler = (msg) => {
    alert(msg);
  };
  return (
    <div>
      <Nav />
      {friends.map((friend) => (
        <Info name={friend.name} age={friend.age} />
      ))}
      <button onClick={() => buttonHandler("天氣不錯喔")}>按我</button>
    </div>
  );
}

export default App;
