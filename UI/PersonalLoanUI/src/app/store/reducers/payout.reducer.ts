import * as fromPayout from '../actions/payout.action';
import { Loan } from 'src/app/models/loan.model';

export interface PayoutState {
    selectedLoans: Loan[];
    payoutAmount: number;
}

export const initialState: PayoutState = {
    selectedLoans: [],
    payoutAmount: 0
};

export function reducer(state = initialState, action: fromPayout.PayoutAction): PayoutState {

    switch (action.type) {
        case fromPayout.ADD_PAYOUT_AMT: {
            const selectedLoans = [...state.selectedLoans, action.payload.loan];
            const payoutAmount = state.payoutAmount + action.payload.amount;
            // remove later
            console.log({
                ...state,
                selectedLoans,
                payoutAmount
            });
            return {
                ...state,
                selectedLoans,
                payoutAmount
            };
        }
        case fromPayout.REDUCE_PAYOUT_AMT: {
            const selectedLoans = state.selectedLoans.filter(
                (loan) => loan !== action.payload.loan
            );
            const payoutAmount = state.payoutAmount - action.payload.amount;
            // remove later
            console.log({
                ...state,
                selectedLoans,
                payoutAmount
            });
            return {
                ...state,
                selectedLoans,
                payoutAmount
            };
        }
    }
    return state;
}

export const getPayoutAmount = (state: PayoutState) => state.payoutAmount;
export const getSelectedLoans = (state: PayoutState) => state.selectedLoans;

