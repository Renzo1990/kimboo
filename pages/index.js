import Head from 'next/head'
import { useContext } from 'react'
import DefaultPageContent from '../components/defaultPageContent'
import { navbarContext } from '../components/useContext/navbarContext'
import styles from '../styles/Home.module.css'

export default function Home() {

  const {navbarNumber, setNavbarNumber} = useContext(navbarContext);
  return (
    <div className={styles.container}>
      {setNavbarNumber(0)}
      <Head>
        <title>Kimboo | Finance Solution</title>
        <meta name="description" content="Kimboo finance solution, money transfer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultPageContent />
    </div>
  )
}
