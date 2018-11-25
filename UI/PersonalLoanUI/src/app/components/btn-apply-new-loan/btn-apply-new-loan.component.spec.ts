import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnApplyNewLoanComponent } from './btn-apply-new-loan.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, LoadDefaultLoansSuccess } from '../../store';
import { Loan } from 'src/app/models/loan.model';

describe('BtnApplyNewLoanComponent', () => {
  let component: BtnApplyNewLoanComponent;
  let fixture: ComponentFixture < BtnApplyNewLoanComponent > ;
  let store: Store <{}> ;
  let dummyData: Loan;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [BtnApplyNewLoanComponent],
        imports: [StoreModule.forRoot(reducers)]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnApplyNewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = fixture.debugElement.injector.get(Store);
    dummyData = {
      refNumber: 933217230,
      name: 'Tempore fuga quaerat',
      balance: 1225,
      interest: 282,
      earlyPaymentFee: 145,
      payoutAmount: 1762
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if max loan amount is reached', async () => {
    store.dispatch(new LoadDefaultLoansSuccess([
      dummyData, dummyData, dummyData
    ]));
    component.isMaxLoanAmountReached().subscribe(
      isMaxLoanAmt => {
        expect(isMaxLoanAmt).toBeTruthy();
      }
    );
  });

  it('should disable button when maximun new loans are loaded', async () => {
    const compiled = fixture.debugElement.nativeElement;
    store.dispatch(new LoadDefaultLoansSuccess([
      dummyData, dummyData, dummyData
    ]));
    fixture.detectChanges();
    expect(compiled.querySelector('button').hasAttribute('disabled')).toBeTruthy();
  });
});
