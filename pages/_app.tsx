import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Cave Craft</title>
				<meta
					name='description'
					content='This is the Official Website for Cave Craft Server'
				/>
				<meta name='theme-color' content='#465194' />
				<meta name='author' content='Cider' />
				<meta
					name='keywords'
					content='Cave Craft, Minecraft, Survival, Spigot'
				/>

				{/* Social Media Tags */}
				<meta property='og:title' content='Cave Craft Server' />
				<meta property='og:type' content='article' />
				<meta property='og:url' content='https://cavecraft.in' />
				<meta property='og:image' content='/favicon-32.png' />
				<meta
					property='og:description'
					content='This is the Cave Craft Minecraft Server.'
				/>
				<meta property='og:site_name' content='Cave Craft' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@ciderboi123' />
				<meta name='twitter:title' content='Cave Craft' />
				<meta name='twitter:creator' content='@ciderboi123' />
				<meta
					name='twitter:description'
					content='This is the Official Website for Cave Craft Server'
				/>
				<meta name='twitter:image:src' content='/favicon-32.png' />
				<meta name='twitter:image:alt' content='no image text provided' />

				<link rel='icon' href='/favicon-16.png' />
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
