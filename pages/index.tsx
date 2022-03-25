import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Main.module.scss';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const App: NextPage = () => {
  let [visible, setVisible] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cave Craft Store</title>
        <meta name="description" content="This is the official store for Cave Craft Server" />
        <link rel="icon" href="/favicon.ico" />
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
                This is the Official Cave Craft Store :)
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
                Work in Progress
              </SplitText>
            </motion.div>
          )}
        </AnimatePresence>
      </p>
    </div>
  )
}

function SplitText(props: any) {
  let { children, ...rest } = props;

  let words = children.split(' ')
  return words.map((word: string | number, i: number) => {
    return (
      <div
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <motion.div
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.div>
      </div>
    )
  })
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default App
