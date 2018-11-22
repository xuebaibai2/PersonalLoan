import { Component, OnInit, Input } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';

@Component({
  selector: 'app-loan-detail-card',
  templateUrl: './loan-detail-card.component.html',
  styleUrls: ['./loan-detail-card.component.css']
})
export class LoanDetailCardComponent implements OnInit {

  @Input() loan: Loan;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
