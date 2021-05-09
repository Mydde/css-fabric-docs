import Head from 'next/head'
import styles from '../../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>cssfabric home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">cssfabric!</a>
        </h1>
        <p className={styles.description}>
           
          <a  href="cssfabric-modules/text">cssfabric-modules/text</a>
          <br /> 
          <a  href="vars">vars</a> 
        </p> 
      </main>

      <footer className={styles.footer}> 
      </footer>
    </div>
  )
}
