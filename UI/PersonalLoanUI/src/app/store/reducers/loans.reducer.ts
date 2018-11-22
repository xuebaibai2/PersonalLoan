import * as fromLoans from '../actions/loans.action';
import { Loan } from 'src/app/models/loan.model';

export interface LoanState {
    data: Loan[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: LoanState = {
    data: [],
    loaded: false,
    loading: false
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
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
    return state;
}

export const getLoansLoading = (state: LoanState) => state.loading;
export const getLoansLoaded = (state: LoanState) => state.loaded;
export const getLoans = (state: LoanState) => state.data;
