import { Action } from '@ngrx/store';
import { Loan } from 'src/app/models/loan.model';

// load default loans
export const LOAD_DEFAULT_LOANS = 'LOAD_DEFAULT_LOANS';
export const LOAD_DEFAULT_LOANS_FAIL = 'LOAD_DEFAULT_LOANS_FAIL';
export const LOAD_DEFAULT_LOANS_SUCCESS = 'LOAD_DEFAULT_LOANS_SUCCESS';

export class LoadDefaultLoans implements Action {
  readonly type = LOAD_DEFAULT_LOANS;
}

export class LoadDefaultLoansFail implements Action {
  readonly type = LOAD_DEFAULT_LOANS_FAIL;
  constructor(public payload: any) {}
}

export class LoadDefaultLoansSuccess implements Action {
  readonly type = LOAD_DEFAULT_LOANS_SUCCESS;
  constructor(public payload: Loan[]) {}
}

export type LoansAction = LoadDefaultLoans |
  LoadDefaultLoansFail |
  LoadDefaultLoansSuccess;
