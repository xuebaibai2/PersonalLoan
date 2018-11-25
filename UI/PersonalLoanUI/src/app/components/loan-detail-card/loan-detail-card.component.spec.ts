import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailCardComponent } from './loan-detail-card.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';

describe('LoanDetailCardComponent', () => {
  let component: LoanDetailCardComponent;
  let fixture: ComponentFixture<LoanDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailCardComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailCardComponent);
    component = fixture.componentInstance;
    
    component.loan = {
      refNumber: 933217230,
      name: 'Tempore fuga quaerat',
      balance: 1225,
      interest: 282,
      earlyPaymentFee: 145,
      payoutAmount: 1762
     };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
