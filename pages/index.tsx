import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";

import { useUserStore } from "../store/store";
import Login from "../components/login";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  const router = useRouter();
  const user = useUserStore((state: any) => state.user);
  useEffect(() => {
    user && router.push("/caminhos")
  }, [user, router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ailo</title>
        <meta name="description" content="Ailo" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="facebook-domain-verification" content="u2z3gxwuedll1qx1fwqxectriy53ar" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ailo</h1>
        <p className={styles.description}>Aprenda programação!</p>
        <Login />
      </main>
    </div>
  );
};

export default HomePage;
