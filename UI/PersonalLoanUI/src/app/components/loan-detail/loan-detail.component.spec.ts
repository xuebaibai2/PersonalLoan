import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailComponent } from './loan-detail.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';
import { LoanDetailCardComponent } from '../loan-detail-card/loan-detail-card.component';

describe('LoanDetailComponent', () => {
  let component: LoanDetailComponent;
  let fixture: ComponentFixture<LoanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailComponent, LoanDetailCardComponent, ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
