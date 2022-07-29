import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../components/aboutus";
import Masthead from "../components/masthead";
import Skills from "../components/skills";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Software Agency</title>
        <meta name="description" content="Landing Page for Software Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
      <Skills />
    </div>
  );
};

export default Home;
