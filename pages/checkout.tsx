import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import SignUp from "../components/signup";

const Checkout: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo!
        </h1>

        <p className={styles.description}>
          Agora é hora de criar sua conta
        </p>

        <SignUp />

      </main>
    </div>
  )
}

export default Checkout
