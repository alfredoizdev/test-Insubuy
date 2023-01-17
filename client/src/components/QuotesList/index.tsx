import { FunctionComponent, useContext } from 'react';
import { AppContext } from 'context/AppContext';
import styles from './QuoteList.module.scss'
import Quote from 'components/Quote';
import BarAction from 'components/BarActions';


const QuoteList: FunctionComponent = () => {

	const { quoteList, view } = useContext(AppContext);

	if (!quoteList) return <h2>Quotes list not found</h2>

	return (
		<>
			<BarAction />
			<div className={view === 'list' ? styles.list : styles.grid}>
				{quoteList.map((quote) => (
					<Quote key={quote.id} quote={quote} />
				))}
			</div>
		</>
	);
};


export default QuoteList