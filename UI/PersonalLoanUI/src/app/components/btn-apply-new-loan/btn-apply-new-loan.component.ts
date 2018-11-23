import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Loan } from 'src/app/models/loan.model';
import * as fromStore from '../../store';

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
    this.store.dispatch(new fromStore.LoadNewLoan());
    this.store.select<any>(fromStore.getAppState).subscribe(
      (obs) => {
        console.log(obs);
      }
    );
  }

}
