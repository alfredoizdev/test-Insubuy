import { IQuote } from 'interfaces/quotes';
import { createContext } from 'react';


interface contextProps {
	showQuotes: boolean;
	quoteList: IQuote[];
	view: 'list' | 'grid';
	setQuotesViewStatus: (status: boolean) => void;
	setView: (view: 'list' | 'grid') => void
}


export const AppContext = createContext({} as contextProps);