import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnApplyAmountComponent } from './btn-apply-amount.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';

describe('BtnApplyAmountComponent', () => {
  let component: BtnApplyAmountComponent;
  let fixture: ComponentFixture<BtnApplyAmountComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
