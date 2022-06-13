import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Analiticbar from "./Analiticbar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <br />
      <Analiticbar data={{ progress: 70 }} />
    </div>
  );
};

export default Home;
