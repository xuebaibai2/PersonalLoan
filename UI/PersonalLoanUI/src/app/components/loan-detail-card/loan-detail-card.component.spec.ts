import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailCardComponent } from './loan-detail-card.component';

describe('LoanDetailCardComponent', () => {
  let component: LoanDetailCardComponent;
  let fixture: ComponentFixture<LoanDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
