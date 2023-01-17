import { FunctionComponent, useContext } from 'react';
import styles from './BarAction.module.scss';
import { AiFillAppstore } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import { AppContext } from 'context/AppContext';



const BarAction: FunctionComponent = () => {

	const { setView, view, setQuotesViewStatus } = useContext(AppContext)

	return (
		<div className={styles.barAction}>
			<div>
				<button
					className={styles.openFormBtn}
					type='button'
					onClick={() => setQuotesViewStatus(false)}
				>
					Open Form
				</button>
			</div>
			<div>
				<button
					className={view === 'grid' ? styles.activate : ''}
					type='button'
					onClick={() => setView('grid')}>
					<AiFillAppstore />
				</button>
				<button
					className={view === 'list' ? styles.activate : ''}
					type='button'
					onClick={() => setView('list')}>
					<AiFillDatabase />
				</button>
			</div>
		</div>
	);
};


export default BarAction