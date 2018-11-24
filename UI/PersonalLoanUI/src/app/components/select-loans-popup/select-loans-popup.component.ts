import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Loan } from 'src/app/models/loan.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-select-loans-popup',
  templateUrl: './select-loans-popup.component.html',
  styleUrls: ['./select-loans-popup.component.css']
})
export class SelectLoansPopupComponent implements OnInit {
  loans$: Observable<Loan[]>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.loans$ = this.store.select<any>(fromStore.getRetrievedNewLoans);
  }

  selectLoanBtnClicked() {
    this.store.dispatch(new fromStore.ConfirmSelectNewLoans());
  }
}
