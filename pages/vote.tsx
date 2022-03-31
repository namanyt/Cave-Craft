import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Vote.module.scss'
import { SplitText } from '../Utils/SpiltText'

const Vote: NextPage = () => {
	let [animate, setAnimate] = useState(false)

	return (
		<>
			<div className={styles.container}>
				<img
					src='https://i.imgur.com/XL2PAd3.png'
					alt=''
					className={styles.bgImage}
				/>
				{/* <Image src="https://i.imgur.com/XL2PAd3.png" width='1920' height='1080' className={styles.bgImage} /> */}

				<AnimatePresence>
					{true && (
						<motion.div
							initial={{
								opacity: 0
							}}
							animate={{
								opacity: 1,
								transition: {
									duration: 1
								}
							}}>
							<Link href='/'>
								<p className={styles.Back}>To Home</p>
							</Link>
						</motion.div>
					)}
				</AnimatePresence>

				<div className={styles.Header}>
					<h1 className={styles.Title}>
						<AnimatePresence>
							{true && (
								<motion.div
									initial={{ opacity: 1 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}>
									<SplitText
										initial={{ y: '100%' }}
										animate='visible'
										onAnimationComplete={() => setAnimate(true)}
										variants={{
											visible: (i: number) => ({
												y: 0,
												transition: {
													delay: i * 0.1
												}
											})
										}}>
										Voting Sites
									</SplitText>
								</motion.div>
							)}
						</AnimatePresence>
					</h1>
				</div>

				<AnimatePresence>
					{animate && (
						<motion.ul
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: 1 } }}
							className={styles.List}>
							<li>
								<Link href='https://topminecraftservers.org/vote/24725'>
									<p className={styles.ListItem}> TopMinecraftServers.org </p>
								</Link>
							</li>
							<li>
								<Link href='https://topg.org/minecraft-servers/server-639283'>
									<p className={styles.ListItem}> Topg.org </p>
								</Link>
							</li>
							<li>
								<Link href='https://minecraftservers.org/server/630970'>
									<p className={styles.ListItem}> MinecraftServers.org </p>
								</Link>
							</li>
							<li>
								<Link href='https://minecraft.buzz/vote/4594'>
									<p className={styles.ListItem}> Minecraft.Buzz </p>
								</Link>
							</li>
							<li>
								<Link href='https://best-minecraft-servers.co/server-cave-craft.6158/vote'>
									<p className={styles.ListItem}> Best-Minecraft-Servers.co </p>
								</Link>
							</li>
						</motion.ul>
					)}
				</AnimatePresence>
			</div>
			<h1 className={styles.MobileText}>
				Mobile Version is not ready yet.... <br /> view this website from your
				laptop
			</h1>
		</>
	)
}

export default Vote
