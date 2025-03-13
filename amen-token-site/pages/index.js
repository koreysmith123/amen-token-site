import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BuyForm from '../components/BuyForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-yellow-100">
      <Head>
        <title>Buy AMEN Token</title>
        <meta name="description" content="Official site to buy AMEN Token on PulseX" />
        <link rel="icon" href="/amen-logo.png" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Buy AMEN Token</h1>
        <p className="text-lg text-gray-700 mb-8">Connect your wallet and get AMEN tokens directly from PulseX.</p>
        <BuyForm />
      </main>
      <Footer />
    </div>
  );
}