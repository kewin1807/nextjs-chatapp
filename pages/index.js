import Head from 'next/head'
import Slidebar from "../components/Slidebar";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Chat App Nextjs</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slidebar />

    </div>
  )
}
