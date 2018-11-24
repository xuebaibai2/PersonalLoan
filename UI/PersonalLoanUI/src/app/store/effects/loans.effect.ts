import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/';

import * as loanActions from '../actions/loans.action';
import * as fromServices from '../../services';

@Injectable()
export class LoanEffects {
    constructor(private actions$: Actions, private loanService: fromServices.LoanService) {}

    // create effect to first listen LOAD_DEFAULT_LOANS event, second retrieve loans data from loan service, third using returned streamed
    // data to create dispatch with Effect.
    @Effect()
    loadLoans$ = this.actions$.ofType(loanActions.LOAD_DEFAULT_LOANS).pipe(
        switchMap(() => {
            return this.loanService.getDefaultLoans().pipe(
                map(loans => new loanActions.LoadDefaultLoansSuccess(loans)),
                catchError((err: any) => of(new loanActions.LoadDefaultLoansFail(err)))
                );
            }
        )
    );

    @Effect()
    loadNewLoan$ = this.actions$.ofType(loanActions.LOAD_NEW_LOANS).pipe(
        switchMap((loadNewLoan: loanActions.LoadNewLoan) => {
            return this.loanService.getNewLoans(loadNewLoan.payload.loanLevel.toLocaleString()).pipe(
                map(loan => new loanActions.LoadNewLoanSuccess(loan)),
                catchError((err: any) => of(new loanActions.LoadNewLoanFail(err))
                 )
            );
        })
    );
}
