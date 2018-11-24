import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import * as CONSTVALUE from '../../shared/const-value';
import { Loan } from '../../models/loan.model';
import { LoanState } from '../../store/reducers/loans.reducer';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  loanError$: Observable<string>;
  maxLoanAmountWarnning: string;
  hasWarning: boolean;
  
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.hasWarning = false;
    this.loanError$ = this.store.select<any>(fromStore.getLoansError);

    this.store.select<any>(fromStore.getLoans).subscribe(
      (loans: Loan[]) => {
        if (loans.length >= CONSTVALUE.MAX_LOAN_AMOUNT) {
          this.hasWarning = true;
          this.maxLoanAmountWarnning = loans.length >= CONSTVALUE.MAX_LOAN_AMOUNT ?
          CONSTVALUE.MAX_LOAN_AMOUNT_WARNING : '';
        }
      }
    );

    this.store.select<any>(fromStore.getLoanState).subscribe(
      (state: LoanState) => {
        if (state.data.length + state.selectedNewLoans.length > CONSTVALUE.MAX_LOAN_AMOUNT) {
          this.hasWarning = true;
          this.maxLoanAmountWarnning = CONSTVALUE.MAX_LOAN_AMOUNT_SELECTED_WARNING;
        } else if (state.data.length >= CONSTVALUE.MAX_LOAN_AMOUNT) {
          this.hasWarning = true;
          this.maxLoanAmountWarnning = state.data.length >= CONSTVALUE.MAX_LOAN_AMOUNT ?
          CONSTVALUE.MAX_LOAN_AMOUNT_WARNING : '';
        } else {
          this.hasWarning = false;
        }
      }
    );
  }

}
