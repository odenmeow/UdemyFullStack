// import Car from "./Car";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import About from "./About";
import Page404 from "./Page404";
import Info from "./info";
function App() {
  const arr = ["dog", "cat", "pig"];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="info" element={<Info messages={arr} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
