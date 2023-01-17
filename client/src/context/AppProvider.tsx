import { FunctionComponent, ReactNode, useEffect, useReducer } from 'react';
import { AppContext, AppReducer, TFilter } from './';
import { IQuote } from '../interfaces/quotes';

export interface AppState {
	showQuotes: boolean;
	quoteList: IQuote[];
	view: 'list' | 'grid';
}

const APP_INITIAL_STATE: AppState = {
	showQuotes: false,
	quoteList: [],
	view: 'list'
};

interface Props {
	children: ReactNode
}


export const AppProvider: FunctionComponent<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);

	useEffect(() => {

		const fetchAndSetQuotesData = async (): Promise<void> => {
			try {
				const response = await fetch('http://localhost:8080/quotes');
				const { quotes } = await response.json();
				dispatch({ type: '[App] - Fetch and set Quotes data', payload: quotes })
			} catch (error) {
				dispatch({ type: '[App] - Fetch and set Quotes data', payload: [] })
			}
		}
		fetchAndSetQuotesData();
	}, [])

	const setQuotesViewStatus = (status: boolean): void => {
		dispatch({ type: "[App] - Set status of quote list", payload: status })
	}

	const setView = (view: 'list' | 'grid'): void => {
		dispatch({ type: '[App] - Set View', payload: view })
	}

	const filterBy = (filter: TFilter) => {
		if (state.quoteList) {
			let filterData = []
			switch (filter) {
				case TFilter.bestSeller:

					filterData = state.quoteList.filter((item) => item.bestSellers);
					dispatch({ type: '[App] - Fetch and set Quotes data', payload: filterData });
					return;
				case TFilter.max:
					filterData = state.quoteList.sort((a, b) => Number(b.price) - Number(a.price));
					dispatch({ type: '[App] - Fetch and set Quotes data', payload: filterData });
					return;
			}
		}
	}

	return (
		<AppContext.Provider
			value={{
				...state,
				setQuotesViewStatus,
				setView,
				filterBy
			}}
		>
			{children}
		</AppContext.Provider>
	);
};