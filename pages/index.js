import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({results}) {

  console.log("The movies====>",results);
  
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
      <Results results={results}/>
    </div>
  );
}

  // server side rendering for tmdb data

export async function getServerSideProps(context){
const genre = context.query.genre;

const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.json());

return{
  props:{
    results: request.results
  }
}
}


// export async function getServerSideProps(context) {
//   const genre = context.query.genre;
// results: [];
  
//   const request = await fetch(`
//   https://api.themoviedb.org/3${
//     requests[genre]?.url || requests.fetchTrending.url
//   }`)

//   const results = await request.json();

//   return {
//     props: {
//       results: results
//     },
//   };
// }