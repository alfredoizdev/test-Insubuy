import { AppState } from './';
import { IQuote } from 'interfaces/quotes';

type AppActionType =
   | { type: '[App] - Set status of quote list', payload: boolean }
   | { type: '[App] - Fetch and set Quotes data', payload: IQuote[] }
   | { type: '[App] - Set View', payload: 'list' | 'grid' };

export const AppReducer = (state: AppState, action: AppActionType): AppState => {
   switch (action.type) {
	   case '[App] - Set status of quote list':
			return {
				...state,
				showQuotes: action.payload
			};
		 case '[App] - Fetch and set Quotes data':
			return {
				...state,
				quoteList: action.payload
			};
			 case '[App] - Set View':
			return {
				...state,
				view: action.payload
			};
	default:
	  return state;
   }
};