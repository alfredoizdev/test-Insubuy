import { AppContext } from 'context';
import { FunctionComponent, useContext } from 'react';
import styles from './Navbar.module.scss';

const Navbar: FunctionComponent = () => {

	const { setQuotesViewStatus } = useContext(AppContext);

	return (
		<div className={styles.navbarContainer}>
			<h2>Insubuy app</h2>
			<button
				type="button"
				onClick={() => setQuotesViewStatus(true)}
			>Open Quotes</button>
		</div>
	);
};


export default Navbar