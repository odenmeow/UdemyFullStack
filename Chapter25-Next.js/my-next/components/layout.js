import Head from "next/head";

const name = "Oni";
const websiteTitle = "Next.js 網站練習";
import Link from "next/link";
export default function Layout({ children, returnBack }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Oni" />
      </Head>
      <header>
        <h1>{websiteTitle}</h1>
        <h2>創建人{name}</h2>
      </header>
      <main>{children}</main>
      {returnBack && <Link href="/">回到首頁</Link>}
    </div>
  );
}
