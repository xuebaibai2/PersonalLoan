import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Loan } from '../../models/loan.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-select-loans-popup-item',
  templateUrl: './select-loans-popup-item.component.html',
  styleUrls: ['./select-loans-popup-item.component.css']
})
export class SelectLoansPopupItemComponent implements OnInit {

  @Input() loan: Loan;
  @Input() index: number;

  isLoanSelected: boolean;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.isLoanSelected = false;
  }

  loanSelected() {
    this.isLoanSelected = !this.isLoanSelected;
    if (this.isLoanSelected) {
      this.store.dispatch(new fromStore.SelectNewLoan(this.loan));
    } else {
      this.store.dispatch(new fromStore.UnSelectNewLoan(this.loan));
    }
  }
}
