import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Loan } from 'src/app/models/loan.model';
import { LoadNewLoanParam, LoanLevel } from '../../models/api/loadNewLoan.param.model';
import * as fromStore from '../../store';
import * as CONSTVALUE from '../../shared/const-value';

@Component({
  selector: 'app-btn-apply-new-loan',
  templateUrl: './btn-apply-new-loan.component.html',
  styleUrls: ['./btn-apply-new-loan.component.css']
})
export class BtnApplyNewLoanComponent implements OnInit {

  loans$: Observable<Loan[]>;
  
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.loans$ = this.store.select<any>(fromStore.getLoans);
  }

  newLoanBtnClicked() {
    this.store.dispatch(new fromStore.LoadNewLoan(new LoadNewLoanParam(LoanLevel.Low)));
  }

  isMaxLoanAmountReached() {
    return this.loans$.pipe(
      switchMap((loans) => of(loans.length >= CONSTVALUE.MAX_LOAN_AMOUNT))
    );
  }
}
