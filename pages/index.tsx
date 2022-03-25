import Head from 'next/head'
import { useState } from 'react';
import type { NextPage } from 'next'
import styles from '../styles/Main.module.scss';

import { SplitText } from '../Utils/SpiltText';
import { AnimatePresence, motion } from 'framer-motion';

const App: NextPage = () => {
  let visible = true;

  return (
    <div className={styles.container}>
      <Head>
        <title>Cave Craft Store</title>
        <meta name="description" content="This is the official store for Cave Craft Server" />
        <link rel="icon" href="/favicon-16.png" />
      </Head>

      <h1>
        <AnimatePresence>
          {visible && (
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
                This is the Official Cave Craft Store 😊
              </SplitText>
            </motion.div>
          )}
        </AnimatePresence>
      </h1>

      <p>
        <AnimatePresence>
          {visible && (
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
                💻 Work in Progress
              </SplitText>
            </motion.div>
          )}
        </AnimatePresence>
      </p>
    </div>
  )
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default App
