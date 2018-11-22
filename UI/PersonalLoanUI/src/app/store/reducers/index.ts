import * as fromLoans from './loans.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

// create appstate interface
export interface AppState {
    loans: fromLoans.LoanState;
}

// register different reducers to one main reducer to export
export const reducers: ActionReducerMap<AppState> = {
    loans: fromLoans.reducer
};

// get loan state from inside retrived app state
export const getLoanState = (state: AppState) => state.loans;

// get single loan state by from retrived loan state
export const getLoans = createSelector(getLoanState, fromLoans.getLoans);
export const getLoansLoaded = createSelector(getLoanState, fromLoans.getLoansLoaded);
export const getLoansLoading = createSelector(getLoanState, fromLoans.getLoansLoading);
export const getLoansError = createSelector(getLoanState, fromLoans.getLoansError);
