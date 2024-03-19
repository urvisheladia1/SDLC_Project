import { useEffect } from 'react';
import Head from 'next/head';
import NavBar from '@/component/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/component/Footer'; // Correct import with matching casing


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Additional setup code if needed
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
