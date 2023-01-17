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
				<span>{quote.section}</span>
				<p>{quote.description}</p>
			</div>
			<div className={styles.cardFooter}>

				{quote.bestSellers && <div className={styles.betSeller}>Best Seller</div>}

				<span>{quote.price.toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				})}</span>

			</div>

		</div>
	);
};


export default Quote