import { AnimatePresence, motion } from 'framer-motion'

export function SplitText(props: any) {
	let { children, ...rest } = props

	let words = children.split('')
	return words.map((word: string | number, i: number) => {
		return (
			<div
				key={children + i}
				style={{ display: 'inline-block', overflow: 'hidden' }}>
				<motion.div
					{...rest}
					style={{ display: 'inline-block', willChange: 'transform' }}
					custom={i}>
					{word + (words[i] == ' ' ? '\u00A0' : '')}
				</motion.div>
			</div>
		)
	})
}
