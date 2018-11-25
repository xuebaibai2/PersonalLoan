import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';
import { LoanDetailComponent } from '../loan-detail/loan-detail.component';
import { NotificationComponent } from '../notification/notification.component';
import { LoanDetailCardComponent } from '../loan-detail-card/loan-detail-card.component';
import { LoanService } from 'src/app/services';
import { Store, StoreModule } from '@ngrx/store';
import * as fromStore from '../../store';
import { reducers } from '../../store';


describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyComponent, LoanDetailComponent, NotificationComponent, LoanDetailCardComponent ],
      providers: [LoanService],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title in a h1 tag', () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   console.log(compiled.querySelector('app-loan-detail'));
  //   fixture.detectChanges();
  //   expect(compiled.querySelector('app-loan-detail').textContent).toContain('Welcome to PersonalLoanUI!');
  // });
});
