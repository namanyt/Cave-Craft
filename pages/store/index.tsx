import { NextPage } from 'next'
import Link from 'next/link'
import { CSSProperties } from 'react'
import styles from '../../styles/Store.module.scss'

const Store: NextPage = () => {
	return (
		<>
			<img
				src='https://i.imgur.com/XL2PAd3.png'
				alt=''
				className={styles.bgImage}
			/>
			<div className={styles.Back}>
				<Link href='/'>
					<h1>Store Page, Work in Progress</h1>
				</Link>
				<p> (click to go back home)</p>
			</div>
		</>
	)
}

export default Store
