import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carry-over-amount',
  templateUrl: './carry-over-amount.component.html',
  styleUrls: ['./carry-over-amount.component.css']
})
export class CarryOverAmountComponent implements OnInit {

  payoutAmount$: Observable<number>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.payoutAmount$ = this.store.select<any>(fromStore.getPayoutAmount);
  }

}
