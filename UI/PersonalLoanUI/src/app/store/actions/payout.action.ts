import { Action } from '@ngrx/store';
import { Payout } from 'src/app/models/payout.model';

export const ADD_PAYOUT_AMT = 'ADD_PAYOUT_AMT';
export const REDUCE_PAYOUT_AMT = 'REDUCE_PAYOUT_AMT';

export class AddPayoutAmt implements Action {
    readonly type = ADD_PAYOUT_AMT;
    constructor(public payload: Payout) {}
}

export class ReducePayoutAmt implements Action {
    readonly type = REDUCE_PAYOUT_AMT;
    constructor(public payload: Payout) {}
}

export type PayoutAction = AddPayoutAmt |
    ReducePayoutAmt;
