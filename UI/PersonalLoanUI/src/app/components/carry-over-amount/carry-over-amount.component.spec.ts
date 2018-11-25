import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryOverAmountComponent } from './carry-over-amount.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';

describe('CarryOverAmountComponent', () => {
  let component: CarryOverAmountComponent;
  let fixture: ComponentFixture<CarryOverAmountComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
