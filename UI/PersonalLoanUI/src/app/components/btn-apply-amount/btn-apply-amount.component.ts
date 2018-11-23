import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Loan } from 'src/app/models/loan.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-btn-apply-amount',
  templateUrl: './btn-apply-amount.component.html',
  styleUrls: ['./btn-apply-amount.component.css']
})
export class BtnApplyAmountComponent implements OnInit {

  noPayoutAmount: boolean;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.store.select<any>(fromStore.getSelectedLoans).subscribe(
      (selectedLoans: Loan[]) => {
        this.noPayoutAmount = selectedLoans.length === 0;
      }
    );
  }
}
