import Head from 'next/head'
import styles from '../../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>css-fabric home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">css-fabric!</a>
        </h1>
        <p className={styles.description}>
           
          <a  href="demo_component/text">demo_component/text</a> 
          <br /> 
          <a  href="vars">vars</a> 
        </p> 
      </main>

      <footer className={styles.footer}> 
      </footer>
    </div>
  )
}
