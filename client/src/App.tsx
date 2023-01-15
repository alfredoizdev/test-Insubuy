import QuotesForm from 'components/QuotesForm';
import Layout from 'Layout';
import React from 'react';
import './App.scss';

function App() {
	return (
		<Layout>
			<div className='container'>
				<QuotesForm />
			</div>
		</Layout>
	);
}

export default App;
