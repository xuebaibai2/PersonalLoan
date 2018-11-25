import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLoansPopupItemComponent } from './select-loans-popup-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';

describe('SelectLoansPopupItemComponent', () => {
  let component: SelectLoansPopupItemComponent;
  let fixture: ComponentFixture<SelectLoansPopupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLoansPopupItemComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLoansPopupItemComponent);
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
