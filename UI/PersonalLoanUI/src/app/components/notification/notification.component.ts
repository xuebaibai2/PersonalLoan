import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  loanError$: Observable<string>;
  test$: Observable<any>;
  
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.loanError$ = this.store.select<any>(fromStore.getLoansError);
  }

}
