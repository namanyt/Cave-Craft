import { NextPage } from "next";
import styles from '../styles/About.module.scss';

import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import { UIEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Link from "next/link";

const About: NextPage = () => {
  let [visible, setVisibility] = useState(true);

  const handleClick = () => {
    setVisibility(!visible);
  }

  return (
    <>
      <div className={styles.container}>
        <img src="https://i.imgur.com/XL2PAd3.png" alt="" className={styles.bgImage} />
        {/* <Image src="https://i.imgur.com/XL2PAd3.png" width='1920' height='1080' className={styles.bgImage} /> */}

        <AnimatePresence>
          {
            true && <motion.div
              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1,
                transition: {
                  duration: 1
                }
              }}
            >
              <Link href='/'>
                <p className={styles.Back}>To Home</p>  
              </Link>
            </motion.div>
          }
        </AnimatePresence>

        <AnimatePresence>
          {
            visible && <motion.div
              variants={{
                hidden: {
                  x: '100%',
                  opacity: 0
                },
                visible: {
                  x: '0%',
                  opacity: 1,
                  transition: {
                    duration: 1
                  }
                },
                hidden_exit: {
                  x: "-100%",
                  opacity: 0,
                  transition: {
                    duration: 1
                  }
                }
              }}

              initial='hidden'
              animate='visible'
              exit='hidden_exit'

              className={styles.Header}
              id="Header"
            >
              <h1 className={styles.Title} onClick={() => handleClick()}>About Us</h1>
            </motion.div>
          }
        </AnimatePresence>
        <AnimatePresence>
          {
            !visible && <motion.div
              variants={{
                hidden: {
                  opacity: 0
                },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1
                  }
                },
                hidden_exit: {
                  opacity: 0,
                  transition: {
                    duration: 1
                  }
                }
              }}

              initial='hidden'
              animate='visible'
              exit='hidden_exit'
            >
              <p onClick={() => handleClick()} className={styles.Content}>
                Toivi Complete this About us 🔫 (or dm it)
              </p>
            </motion.div>
          }
        </AnimatePresence>


      </div>
      <h1 className={styles.MobileText}>
        Mobile Version is not ready yet.... <br /> view this website from your laptop
      </h1>
    </>
  )
}

export default About;