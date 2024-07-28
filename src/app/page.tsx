import Head from 'next/head';
import Search from '../components/Search';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Whois Domain Lookup</title>
        <meta name="description" content="A simple Whois domain lookup tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen pb-96">
        <h1 className="text-4xl font-bold mb-10">Whois Domain Lookup</h1>
        <Search />
      </main>
    </div>
  );
};

export default Home;
