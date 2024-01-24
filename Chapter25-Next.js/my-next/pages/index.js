// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>這是網站首頁</h1>
      <a href="/posts/edit-post"> 前往editPost_頁面會重整 </a>
      <hr></hr>
      <Link href="/posts/edit-post">前往editPost_使用Link</Link>
    </div>
  );
}
