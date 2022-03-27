import { NextPage } from "next";
import styles from '../styles/About.module.scss';

import { AnimatePresence, m, motion, useViewportScroll } from 'framer-motion';
import { UIEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";

const About: NextPage = () => {
  let [visible, setVisibility] = useState(0);

  const handleClick = () => {
    if (visible == 0) setVisibility(1);
    if (visible == 1) setVisibility(2);
    if (visible == 2) setVisibility(0);

    console.log(visible);
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
            visible == 0 && <motion.div
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
            visible == 1 && <motion.div
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
                Toivi dm me the Desciption of the Server
              </p>
            </motion.div>
          }
        </AnimatePresence>
        <AnimatePresence>
          {
            visible == 2 && <motion.div
              variants={{
                hidden: {
                  y: '-100%',
                  opacity: 0
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1
                  }
                },
                hidden_exit: {
                  y: '100%',
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
              <div className={styles.Staff} onClick={() => handleClick()}>
                <h1>Our Staff</h1>
                <Card className={styles.StaffCard}>
                  <Card.Img className={styles.CardImg} variant="top" src="/toivi.webp" />
                  <Card.Body>
                    <Card.Title>Toivi</Card.Title>
                    <Card.Subtitle>Owner</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className={styles.StaffCard}>
                  <Card.Img className={styles.CardImg} variant="top" src="/drescape.webp" />
                  <Card.Body>
                    <Card.Title>Dr Escape</Card.Title>
                    <Card.Subtitle>Owner</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className={styles.StaffCard}>
                  <Card.Img className={styles.CardImg} variant="top" src="/cider.gif" />
                  <Card.Body>
                    <Card.Title>Cider</Card.Title>
                    <Card.Subtitle>Developer</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className={styles.StaffCard}>
                  <Card.Img className={styles.CardImg} variant="top" src="/pranay.webp" />
                  <Card.Body>
                    <Card.Title>Pranay</Card.Title>
                    <Card.Subtitle>Admin</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className={styles.StaffCard}>
                  <Card.Img className={styles.CardImg} variant="top" src="/vaibhavi.gif" />
                  <Card.Body>
                    <Card.Title>Vaibhavi</Card.Title>
                    <Card.Subtitle>Admin</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className={styles.StaffCard}>
                  <Card.Img className={styles.CardImg} variant="top" src="/insu.webp" />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '16px' }}>MostInsaneGirl</Card.Title>
                    <Card.Subtitle>Moderator</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className={styles.StaffCard}>
                  <Card.Img className={styles.CardImg} variant="top" src="/inphu.webp" />
                  <Card.Body>
                    <Card.Title>Inferno</Card.Title>
                    <Card.Subtitle>Moderator</Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>

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