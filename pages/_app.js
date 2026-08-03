import '@/styles/globals.css';
import Head from 'next/head';
import { JetBrains_Mono, Hanken_Grotesk } from "next/font/google";

// Satoshi (body) loads from Fontshare in _document.js. Display + mono faces
// come from next/font: Hanken Grotesk for the name & section headers.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
  adjustFontFallback: false,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Agu Jonas — Software Engineer</title>
        <meta
          name="description"
          content="Agu Jonas — software engineer building distributed systems: service meshes, webhook pipelines, encryption boundaries, and vector search at scale. Range across the stack, from Kubernetes to polished frontends."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="root" className={`${jetbrainsMono.variable} ${hankenGrotesk.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
