import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryOverAmountComponent } from './carry-over-amount.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, AddPayoutAmt } from '../../store';
import { Payout } from 'src/app/models/payout.model';

describe('CarryOverAmountComponent', () => {
  let component: CarryOverAmountComponent;
  let fixture: ComponentFixture<CarryOverAmountComponent>;
  let store: Store<{}>;
  let dummyData: Payout;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryOverAmountComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryOverAmountComponent);
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
      amount: 1762
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add up all selected loans amount', () => {
    store.dispatch(new AddPayoutAmt(dummyData));
    store.dispatch(new AddPayoutAmt(dummyData));
    component.payoutAmount$.subscribe(
      (payoutAmt) => {
        expect(payoutAmt).toEqual(dummyData.amount + dummyData.amount);
      }
    );
  });
});
