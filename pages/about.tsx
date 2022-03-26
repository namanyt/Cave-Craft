import { NextPage } from "next";
import styles from '../styles/About.module.scss';

const About: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="https://i.imgur.com/XL2PAd3.png" alt="" className={styles.bgImage} />
        {/* <Image src="https://i.imgur.com/XL2PAd3.png" width='1920' height='1080' className={styles.bgImage} /> */}

        <section className={styles.Header}>
          <h1 className={styles.Title}>About Us</h1>
        </section>

        {/* TODO: put scroll effect on about me */}

      </div>
      <h1 className={styles.MobileText}>
        Mobile Version is not ready yet.... <br /> view this website from your laptop
      </h1>
    </>
  )
}

export default About;