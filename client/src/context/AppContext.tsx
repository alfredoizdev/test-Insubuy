import { IQuote } from 'interfaces/quotes';
import { createContext } from 'react';

export enum TFilter {
	bestSeller = 'best-seller',
	max = 'max',
	reset = 'reset',
}


interface contextProps {
	showQuotes: boolean;
	quoteList: IQuote[];
	view: 'list' | 'grid';
	setQuotesViewStatus: (status: boolean) => void;
	setView: (view: 'list' | 'grid') => void;
	filterBy: (filter: TFilter) => void;
}


export const AppContext = createContext({} as contextProps);