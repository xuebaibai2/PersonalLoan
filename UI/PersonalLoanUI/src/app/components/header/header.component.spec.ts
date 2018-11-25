import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';
import { CarryOverAmountComponent } from '../carry-over-amount/carry-over-amount.component';
import { BtnApplyAmountComponent } from '../btn-apply-amount/btn-apply-amount.component';
import { BtnApplyNewLoanComponent } from '../btn-apply-new-loan/btn-apply-new-loan.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent,
        CarryOverAmountComponent,
        BtnApplyAmountComponent,
        BtnApplyNewLoanComponent
      ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
