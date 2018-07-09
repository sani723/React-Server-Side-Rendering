import Link from "next/link";
import Head from "next/head";
import TopBar from "../Bar";

export default ({ children, title = "This is the default title" }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <TopBar />
    </header>

    {children}

    <footer>&copy; Recipes 2018. All rights Reserved</footer>
  </>
);
