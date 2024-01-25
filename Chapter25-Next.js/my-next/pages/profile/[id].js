import Layout from "../../components/layout";
export async function getStaticPaths() {
  const response = await fetch("http://localhost:3001/students");
  const data = await response.json();
  // paths一定要符合 Next.js 要求的格式
  // getStaticPaths() 一定要return 一個有paths的屬性的物件
  // paths 一定需要一個array of objects
  // 內部每個objecy都需要有params，裡面還要有id的屬性
  // 每個id會被拿來做頁面
  const paths = data.map((d) => {
    return {
      params: {
        id: d._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false, //  false製作404頁面
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:3001/students/${params.id}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

export default function StudentProfile({ data }) {
  return (
    <Layout returnPrevious={"/profile"}>
      <div>
        <h1>學生資料</h1>
        <p>姓名:{data.name}</p>
        <p>年齡:{data.age}</p>
        <p>獎學金:{data.scholarship.merit}</p>
        <p>其他:{data.scholarship.other}</p>
      </div>
    </Layout>
  );
}
