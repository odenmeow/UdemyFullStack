import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";
const Homepage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = process.env.REACT_APP_PHOTOAPIKEY;
  const initialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    console.log(result);
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    setPage(page + 1); //因為clousre所以設定完，不會拿到更改後的page
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
    //setData([...data, ...result.data.photos]); 也可以喔
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
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
