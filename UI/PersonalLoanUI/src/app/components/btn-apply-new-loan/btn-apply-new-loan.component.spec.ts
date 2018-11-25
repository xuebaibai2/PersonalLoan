import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnApplyNewLoanComponent } from './btn-apply-new-loan.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';

describe('BtnApplyNewLoanComponent', () => {
  let component: BtnApplyNewLoanComponent;
  let fixture: ComponentFixture<BtnApplyNewLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnApplyNewLoanComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnApplyNewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
