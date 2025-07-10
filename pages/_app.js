import { CustomCursor } from '@/components/cursor/CustomCursor';
import '@/styles/globals.css';
import Head from 'next/head';
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jonas Agu - JavaScript Engineer</title>
        <meta name="description" content="Jonas Agu - JavaScript Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="root" className={poppins.className}>
        <CustomCursor />
        <Component {...pageProps} />
      </div>
    </>
  );
}
