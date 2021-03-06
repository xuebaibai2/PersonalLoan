import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, forkJoin } from 'rxjs';

import { Loan } from 'src/app/models/loan.model';
import * as fromStore from '../../store';
import { AppState } from '../../store';
import * as CONSTVALUE from '../../shared/const-value';

@Component({
  selector: 'app-select-loans-popup',
  templateUrl: './select-loans-popup.component.html',
  styleUrls: ['./select-loans-popup.component.css']
})
export class SelectLoansPopupComponent implements OnInit {
  // retrievedNewLoans$: Observable<Loan[]>;
  retrievedNewLoans: Loan[];
  // stagedLoans: Loan[];
  stagedLoansNum: number;
  selectedNewLoansNum: number;
  isBtnDisabled: boolean;


  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    // this.retrievedNewLoans$ = this.store.select<any>(fromStore.getRetrievedNewLoans);

    this.store.select<any>(fromStore.getLoanState).subscribe(
      (state) => {
        this.stagedLoansNum = state.data.length;
        this.selectedNewLoansNum = state.selectedNewLoans.length;
        this.isBtnDisabled = !this.isMaxAllowedLoanReached();
        this.retrievedNewLoans = this.filterDupLoans(state.data, state.retrievedNewLoans);
      }
    );
  }

  filterDupLoans(stagedLoans: Loan[], retrievedLoans: Loan[]): Loan[] {
    return retrievedLoans.filter(o => !stagedLoans.find(o2 => o.refNumber === o2.refNumber));
  }

  selectLoanBtnClicked() {
    if (this.isMaxAllowedLoanReached()) {
      this.store.dispatch(new fromStore.ConfirmSelectNewLoans());
    }
  }

  isMaxAllowedLoanReached() {
    return CONSTVALUE.MAX_LOAN_AMOUNT >= this.stagedLoansNum + this.selectedNewLoansNum;
  }
}
