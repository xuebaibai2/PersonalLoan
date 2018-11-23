import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import * as CONSTVALUE from '../../shared/const-value';
import { Loan } from 'src/app/models/loan.model';

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
  }

}
