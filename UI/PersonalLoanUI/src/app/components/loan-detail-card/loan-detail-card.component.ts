import { Component, OnInit, Input } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';
import { Payout } from 'src/app/models/payout.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-loan-detail-card',
  templateUrl: './loan-detail-card.component.html',
  styleUrls: ['./loan-detail-card.component.css']
})
export class LoanDetailCardComponent implements OnInit {

  @Input() loan: Loan;
  @Input() index: number;

  topUpSelected: boolean;
  payout: Payout;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.topUpSelected = false;
    this.payout = {
      loan: this.loan,
      amount: Number(this.loan.payoutAmount)
    };
  }

  topUpChanged() {
    this.topUpSelected = !this.topUpSelected;
    if (this.topUpSelected) {
    this.store.dispatch(new fromStore.AddPayoutAmt(this.payout));
    } else {
      this.store.dispatch(new fromStore.ReducePayoutAmt(this.payout));
    }
  }
}
