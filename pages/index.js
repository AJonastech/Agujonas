import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Jonas Agu | Software Engineer</title>
        <meta name="description" content="Portfolio of Jonas Agu, a professional software engineer specializing in web engineering, using JavaScript, typescript, python and modern frameworks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile.PNG" />
      </Head>
      <Home />
    </>
  );
}
