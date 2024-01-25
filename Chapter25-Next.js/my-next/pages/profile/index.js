// import { useEffect, useState } from "react";
// export default function Profile() {
//   const [data, setData] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   useEffect(() => {
//     const myfunction = async () => {
//       setLoading(true);
//       let response = await fetch("http://localhost:3001/students");
//       let data = await response.json();
//       setData(data);
//       setLoading(false);
//     };
//     myfunction();
//   }, []);
//   return (
//     <div>
//       <h1>{isLoading && "Loading"}</h1>
//       {data && data.map((d) => <p>{d.name}</p>)}
//     </div>
//   );
// }
import Link from "next/link";
import Layout from "../../components/layout";
export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/students");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
export default function Profile({ data }) {
  return (
    <Layout returnBack={true}>
      <div>
        {data.map((d) => (
          <Link
            style={{ display: "block", width: "fit-content" }}
            href={`/profile/${d._id}`}
          >
            {d.name}
          </Link>
        ))}
        <br />
      </div>
    </Layout>
  );
}
