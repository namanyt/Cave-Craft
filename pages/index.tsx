import Head from 'next/head'
import Link from 'next/link';
import type { NextPage } from 'next'
import styles from '../styles/Main.module.scss';

const App: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cave Craft</title>
        <meta name="description" content="This is the Official Website for Cave Craft Server" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Cave Craft Server" />
        <meta property="og:url" content="https://cavecraft.in" />
        <meta property="og:image" content="/favicon-256.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="This is the Cave Craft Minecraft Server." />
        <meta property="og:site_name" content="Cave Craft.in" />
        <meta name="twitter:image:alt" content="no image text provided" />

        <link rel="icon" href="/favicon-16.png" />
      </Head>


      <nav className={styles.Nav}>
        <div className={styles.Logo}>
          <img src="/favicon-256.png" alt="" /> Cave Craft.in

          <ul>
            <li> <Link href="/store"> Store </Link> </li>
            <li> <Link href="/about"> About </Link> </li>
            <li> <Link href="/"> Home </Link> </li>
          </ul>

        </div>
      </nav>

      <img src="https://i.imgur.com/XL2PAd3.png" alt="" className={styles.bgImage} />
    </div>
  )
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default App
