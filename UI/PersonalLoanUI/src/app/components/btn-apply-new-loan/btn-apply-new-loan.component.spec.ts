import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnApplyNewLoanComponent } from './btn-apply-new-loan.component';

describe('BtnApplyNewLoanComponent', () => {
  let component: BtnApplyNewLoanComponent;
  let fixture: ComponentFixture<BtnApplyNewLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnApplyNewLoanComponent ]
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
