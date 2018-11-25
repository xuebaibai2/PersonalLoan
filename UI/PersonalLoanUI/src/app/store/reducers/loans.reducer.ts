import * as fromLoans from '../actions/loans.action';
import { Loan } from 'src/app/models/loan.model';

export interface LoanState {
    data: Loan[];
    loaded: boolean;
    loading: boolean;
    error: string;
    retrievedNewLoans: Loan[];
    selectedNewLoans: Loan[];
}

export const initialState: LoanState = {
    data: [],
    loaded: false,
    loading: false,
    error: '',
    retrievedNewLoans: [],
    selectedNewLoans: []
};

export function reducer(state = initialState, action: fromLoans.LoansAction): LoanState {

    switch (action.type) {
        case fromLoans.LOAD_DEFAULT_LOANS: {
            return {
                ...state,
                // loading: true
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
            const selectedNewLoans = [];
            return {
                ...state,
                loading: true,
                selectedNewLoans
            };
        }
        case fromLoans.LOAD_NEW_LOANS_SUCCESS: {
            const retrievedNewLoans = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                retrievedNewLoans
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
        case fromLoans.SELECT_NEW_LOAN: {
            const selectedNewLoans = [...state.selectedNewLoans, action.payload];
            return {
                ...state,
                selectedNewLoans
            };
        }
        case fromLoans.UNSELECT_NEW_LOAN: {
            const selectedNewLoans = state.selectedNewLoans.filter(
                (loan) => loan !== action.payload
            );
            return {
                ...state,
                selectedNewLoans
            };
        }
        case fromLoans.CONFIRM_SELECT_NEW_LOANS: {
            const data = [...state.data, ...state.selectedNewLoans];
            const retrievedNewLoans = [];
            const selectedNewLoans = [];
            return {
                ...state,
                data,
                retrievedNewLoans,
                selectedNewLoans
            };
        }
    }
    return state;
}

export const getSelectedNewLoans = (state: LoanState) => state.selectedNewLoans;
export const getRetrievedNewLoans = (state: LoanState) => state.retrievedNewLoans;
export const getLoansLoading = (state: LoanState) => state.loading;
export const getLoansLoaded = (state: LoanState) => state.loaded;
export const getLoansError = (state: LoanState) => state.error;
export const getLoans = (state: LoanState) => state.data;

