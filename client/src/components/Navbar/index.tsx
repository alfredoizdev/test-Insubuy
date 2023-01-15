import { FunctionComponent } from 'react';
import styles from './Navbar.module.scss';

const Navbar: FunctionComponent = () => {
	return (
		<div className={styles.navbarContainer}>
			<h2>Insubuy app</h2>
		</div>
	);
};


export default Navbar