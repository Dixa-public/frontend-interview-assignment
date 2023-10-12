import styles from './app.module.scss'

export const App = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<img
				src='https://cdn.dixa.io/images/logo/dixa-horizontal-white.svg'
				width='200'
			/>
		</div>
	)
}
