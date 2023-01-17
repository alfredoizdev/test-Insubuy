import { FunctionComponent, useContext } from 'react';
import { AppContext, TFilter } from 'context';
import styles from './FilterBar.module.scss';





const FilterBar: FunctionComponent = () => {

	const { filterBy } = useContext(AppContext)

	return (
		<div className={styles.filterBar}>
			<button
				type='button'
				onClick={() => filterBy(TFilter.bestSeller)}
			>
				Best seller
			</button>
			<button
				type='button'
				onClick={() => filterBy(TFilter.max)}
			>
				Max
			</button>
		</div>
	);
};


export default FilterBar