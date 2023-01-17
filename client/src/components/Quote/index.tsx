import { FunctionComponent } from 'react';
import { IQuote } from 'interfaces/quotes';
import styles from './Quote.module.scss'


interface Props {
	quote: IQuote
}


const Quote: FunctionComponent<Props> = ({ quote }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<div className={styles.quoteIndex}>
					{quote.id}
				</div>
				<h2> {quote.name}</h2>
			</div>
			<div className={styles.cardBody}>
				<p>{quote.description}</p>
			</div>
		</div>
	);
};


export default Quote