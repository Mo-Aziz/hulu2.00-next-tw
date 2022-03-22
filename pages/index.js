import Head from 'next/head'
 
import Header from '../components/Header'
 

export default function Home() {
  return (
    <div >
      <Head>
        <title>Hulu 2.00</title>
        <meta name="description" content="clone of hulu 2.00" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
       {/* Header */}
       <Header/>
       {/* Nav */}
       {/* result */}
    </div>
  )
}
