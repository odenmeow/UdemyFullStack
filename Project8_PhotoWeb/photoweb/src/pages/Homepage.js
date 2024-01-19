import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";
const Homepage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  const auth = process.env.REACT_APP_PHOTOAPIKEY;
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    console.log(result);
    setData(result.data.photos);
  };
  useEffect(() => {
    search(initialURL);
  }, []);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data && data.map((d) => <Picture data={d} />)}
      </div>
    </div>
  );
};

export default Homepage;
