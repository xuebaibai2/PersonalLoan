import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {

  loans$: Observable<Loan[]>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.loans$ = this.store.select<any>(fromStore.getLoans);
    this.store.dispatch(new fromStore.LoadDefaultLoans());
  }

}
