import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next'
import styles from '../styles/Main.module.scss';

import { AnimatePresence, motion } from 'framer-motion';
import { SplitText } from '../Utils/SpiltText';
import { Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const App: NextPage = () => {
  let [showAlert, setShowAlert] = useState(false);

  const handleAlerts = () => {
    setShowAlert(true);
    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 2000)
  }

  const copyIp = () => {
    navigator.clipboard.writeText('play.cavecraft.in');
    handleAlerts();
  }

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.Nav}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
          <div className={styles.Logo}>
            <span><img src="/favicon-32.png" alt="" /> Cave Craft </span>

            <ul>
              <li> <Link href="/store"> Store </Link> </li>
              <li> <Link href="/about"> About </Link> </li>
              <li> <Link href="/"> Home </Link> </li>
            </ul>

            </div>
          </motion.div>
        </nav>

        <img src="https://i.imgur.com/XL2PAd3.png" alt="" className={styles.bgImage} />
        {/* <Image src="https://i.imgur.com/XL2PAd3.png" width='1920' height='1080' className={styles.bgImage} /> */}
        
        <section className={styles.Header}>
          <OverlayTrigger
            placement='top'
            overlay={<Tooltip>Click to copy the IP</Tooltip>}
          >
            <h1 className={styles.Title} onClick={() => copyIp()}>
              <AnimatePresence>
                {true && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SplitText
                      initial={{ y: '100%' }}
                      animate="visible"
                      variants={{
                        visible: (i: number) => ({
                          y: 0,
                          transition: {
                            delay: i * 0.1
                          }
                        })
                      }}
                    >
                      Cave Craft
                    </SplitText>
                  </motion.div>
                )}
              </AnimatePresence>
            </h1>
          </OverlayTrigger>

          <Alert
            key='primary'
            variant='success'
            show={showAlert}
            className={styles.Alert}
            dismissible={true}
            onClose={() => {setShowAlert(false)}}
          >
            Copied to Clipbord
          </Alert>
        </section>
      </div>

      <h1 className={styles.MobileText}>
        Mobile Version is not ready yet.... <br /> view this website from your laptop
      </h1>
    </>
  )
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default App
