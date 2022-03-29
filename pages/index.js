import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.00</title>
        <meta name="description" content="clone of hulu 2.00" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav />
      {/* result */}
      <Results/>
    </div>
  );

  // server side rendering for mdb data
}

