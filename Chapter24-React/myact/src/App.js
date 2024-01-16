import Nav from "./nav";
import Info from "./info";
function App() {
  let friends = ["咪咪", "阿橘", "黑皮"];
  return (
    <div>
      <Nav />
      {friends.map((friend) => (
        <Info name={friend.name} age={friend.age} />
      ))}
    </div>
  );
}

export default App;
