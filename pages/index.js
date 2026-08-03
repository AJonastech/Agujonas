import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Agu Jonas | Systems Engineer</title>
        <meta name="description" content="Agu Jonas — software engineer building distributed systems: service meshes, webhook pipelines, encryption boundaries, and vector search at scale. Range across the stack, from Kubernetes to polished frontends." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
