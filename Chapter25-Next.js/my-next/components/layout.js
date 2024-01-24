import Head from "next/head";

const name = "Oni";
const websiteTitle = "Next.js 網站練習";
import Link from "next/link";

import styles from "./layout.module.css";

export default function Layout({ children, returnBack }) {
  return (
    <div className={styles.layout}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Oni" />
      </Head>
      <header className={styles.header}>
        <h1>{websiteTitle}</h1>
        <h2>創建人{name}</h2>
      </header>
      <main>{children}</main>
      {returnBack && (
        <Link href="/" className={styles.home}>
          回到首頁
        </Link>
      )}
    </div>
  );
}
