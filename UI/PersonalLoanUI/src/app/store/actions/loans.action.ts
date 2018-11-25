import { Action } from '@ngrx/store';
import { Loan } from '../../models/loan.model';
import { LoadNewLoanParam } from '../../models/api/loadNewLoan.param.model';

export const LOAD_DEFAULT_LOANS = 'LOAD_DEFAULT_LOANS';
export const LOAD_DEFAULT_LOANS_FAIL = 'LOAD_DEFAULT_LOANS_FAIL';
export const LOAD_DEFAULT_LOANS_SUCCESS = 'LOAD_DEFAULT_LOANS_SUCCESS';

export const LOAD_NEW_LOANS = 'LOAD_NEW_LOANS';
export const LOAD_NEW_LOANS_FAIL = 'LOAD_NEW_LOANS_FAIL';
export const LOAD_NEW_LOANS_SUCCESS = 'LOAD_NEW_LOANS_SUCCESS';

export const SELECT_NEW_LOAN = 'SELECT_NEW_LOAN';
export const UNSELECT_NEW_LOAN = 'UNSELECT_NEW_LOAN';
export const CONFIRM_SELECT_NEW_LOANS = 'CONFIRM_SELECT_NEW_LOANS';

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

export class LoadNewLoan implements Action {
  readonly type = LOAD_NEW_LOANS;
  constructor (public payload: LoadNewLoanParam) {}
}

export class LoadNewLoanFail implements Action {
  readonly type = LOAD_NEW_LOANS_FAIL;
  constructor(public payload: any) {}
}

export class LoadNewLoanSuccess implements Action {
  readonly type = LOAD_NEW_LOANS_SUCCESS;
  constructor(public payload: Loan[]) {}
}

export class SelectNewLoan implements Action {
  readonly type = SELECT_NEW_LOAN;
  constructor(public payload: Loan) {}
}

export class UnSelectNewLoan implements Action {
  readonly type = UNSELECT_NEW_LOAN;
  constructor(public payload: Loan) {}
}

export class ConfirmSelectNewLoans implements Action {
  readonly type = CONFIRM_SELECT_NEW_LOANS;
}


export type LoansAction = LoadDefaultLoans |
  LoadDefaultLoansFail |
  LoadDefaultLoansSuccess |
  LoadNewLoan |
  LoadNewLoanFail |
  LoadNewLoanSuccess |
  SelectNewLoan |
  UnSelectNewLoan|
  ConfirmSelectNewLoans;
