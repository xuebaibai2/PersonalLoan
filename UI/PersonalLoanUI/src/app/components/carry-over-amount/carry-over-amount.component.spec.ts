import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryOverAmountComponent } from './carry-over-amount.component';

describe('CarryOverAmountComponent', () => {
  let component: CarryOverAmountComponent;
  let fixture: ComponentFixture<CarryOverAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryOverAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryOverAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
