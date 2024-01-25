import Layout from "../../components/layout";
// 名稱一定要是getStaticProps
export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/students");
  const data = await response.json();

  // getStaticProps() 一定要return 一個物件
  // 該物件的屬性一定要叫做 props
  // props屬性會自動被Next.js使用
  // props屬性會自動變成下面 default function的參數
  return {
    props: {
      data,
    },
  };
}

export default function StaticGenerationPage({ data }) {
  return (
    <Layout returnBack={true}>
      <div>
        {data.map((d) => (
          <p key={d._id}>{d.name}</p>
        ))}
      </div>
    </Layout>
  );
}
