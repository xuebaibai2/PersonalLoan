import * as fromLoans from '../actions/loans.action';
import { Loan } from 'src/app/models/loan.model';

export interface LoanState {
    data: Loan[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: LoanState = {
    data: [],
    loaded: false,
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: fromLoans.LoansAction): LoanState {

    switch (action.type) {
        case fromLoans.LOAD_DEFAULT_LOANS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromLoans.LOAD_DEFAULT_LOANS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }
        case fromLoans.LOAD_DEFAULT_LOANS_FAIL: {
            const error = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            };
        }
        case fromLoans.LOAD_NEW_LOANS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromLoans.LOAD_NEW_LOANS_SUCCESS: {
            const data = [...state.data, action.payload];
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }
        case fromLoans.LOAD_NEW_LOANS_FAIL: {
            const error = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            };
        }
    }
    return state;
}

export const getLoansLoading = (state: LoanState) => state.loading;
export const getLoansLoaded = (state: LoanState) => state.loaded;
export const getLoansError = (state: LoanState) => state.error;
export const getLoans = (state: LoanState) => state.data;
