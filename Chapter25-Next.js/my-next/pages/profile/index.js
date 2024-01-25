import { useEffect, useState } from "react";
export default function Profile() {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const myfunction = async () => {
      setLoading(true);
      let response = await fetch("http://localhost:3001/students");
      let data = await response.json();
      setData(data);
      setLoading(false);
    };
    myfunction();
  }, []);
  return (
    <div>
      <h1>{isLoading && "Loading"}</h1>
      {data && data.map((d) => <p>{d.name}</p>)}
    </div>
  );
}
