import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <div>
      <Head>
        <title>Welcome to {APP_NAME}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-semibold text-center">
        Welcome to {APP_NAME} my <span className="text-blue-800">user</span>
      </h1>
    </div>
  );
};

export default Home;
