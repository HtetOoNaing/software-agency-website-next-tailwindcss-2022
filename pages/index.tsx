import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/aboutus";
import Masthead from "../components/masthead";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Software Agency</title>
        <meta name="description" content="Landing Page for Software Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
    </div>
  );
};

export default Home;
