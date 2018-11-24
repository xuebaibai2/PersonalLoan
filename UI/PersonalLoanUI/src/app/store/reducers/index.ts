import * as fromLoans from './loans.reducer';
import * as fromPayout from './payout.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

// create appstate interface
export interface AppState {
    loans: fromLoans.LoanState;
    payout: fromPayout.PayoutState;
}

// register different reducers to one main reducer to export
export const reducers: ActionReducerMap<AppState> = {
    loans: fromLoans.reducer,
    payout: fromPayout.reducer
};

export const getAppState = (state: AppState) => state;

// get states from inside retrived app state
export const getLoanState = (state: AppState) => state.loans;
export const getPayoutState = (state: AppState) => state.payout;

// get single loan state by from retrived loan state
export const getLoans = createSelector(getLoanState, fromLoans.getLoans);
export const getLoansLoaded = createSelector(getLoanState, fromLoans.getLoansLoaded);
export const getLoansLoading = createSelector(getLoanState, fromLoans.getLoansLoading);
export const getLoansError = createSelector(getLoanState, fromLoans.getLoansError);
export const getSelectedNewLoans = createSelector(getLoanState, fromLoans.getSelectedNewLoans);
export const getRetrievedNewLoans = createSelector(getLoanState, fromLoans.getRetrievedNewLoans);

// get single payout state by from retrived payout state
export const getPayoutAmount = createSelector(getPayoutState, fromPayout.getPayoutAmount);
export const getSelectedLoans = createSelector(getPayoutState, fromPayout.getSelectedLoans);
