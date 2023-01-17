import QuotesForm from 'components/QuotesForm';
import QuotesList from 'components/QuotesList';
import { AppContext } from 'context';
import Layout from 'Layout';
import { useContext } from 'react';
import './App.scss';

function App() {

	const { showQuotes } = useContext(AppContext);

	return (
		<Layout>
			<div className='container'>
				{showQuotes ? <QuotesList /> : <QuotesForm />}
			</div>
		</Layout>
	);
}

export default App;
