// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
export default function Home() {
  return (
    <Layout>
      <div>
        <h1>這是網站首頁</h1>
        <a href="/posts/edit-post"> 前往editPost_頁面會重整 </a>
        <hr></hr>
        <Link href="/posts/edit-post">前往editPost_使用Link</Link>
        <hr />
        <Link href="/newPage">前往newPage</Link>
        <hr />
        <Link href="/profile/static-generation-with-data">
          前往static-generation-with-data
        </Link>
      </div>
    </Layout>
  );
}
