import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnApplyAmountComponent } from './btn-apply-amount.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, LoadDefaultLoansSuccess, AddPayoutAmt } from '../../store';
import { Loan } from 'src/app/models/loan.model';
import { Payout } from 'src/app/models/payout.model';

describe('BtnApplyAmountComponent', () => {
  let component: BtnApplyAmountComponent;
  let fixture: ComponentFixture<BtnApplyAmountComponent>;
  let dummyData: Payout;
  let store: Store<{}>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnApplyAmountComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnApplyAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = fixture.debugElement.injector.get(Store);
    dummyData = {
      loan: {
      refNumber: 933217230,
      name: 'Tempore fuga quaerat',
      balance: 1225,
      interest: 282,
      earlyPaymentFee: 145,
      payoutAmount: 1762
    },
      amount: 123
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button when no topup is selected', async () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('button').hasAttribute('disabled')).toBeTruthy();
  });

  it('should set noPayoutAmount to false if topup is selected', async () => {
    store.dispatch(new AddPayoutAmt(dummyData));
    fixture.detectChanges();
    expect(component.noPayoutAmount).toBeFalsy();
  });

});
