import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, LoadDefaultLoansFail } from '../../store';
import * as fromStore from '../../store';
import { of } from 'rxjs';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let store: Store<{}>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = fixture.debugElement.injector.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render notification-warning div with show-warning class', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.hasWarning = true;
    fixture.detectChanges();
    expect(compiled.querySelector('.notification-warning').classList.contains('show-warning')).toBeTruthy();
  });

  it('should render notification-error div with show-warning class', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.loanError$ = of('Warning message');
    fixture.detectChanges();
    expect(compiled.querySelector('.notification-error').classList.contains('show-warning')).toBeTruthy();
  });

  it('should render notification-error div if api returns error', () => {
    const compiled = fixture.debugElement.nativeElement;
    store.dispatch(new LoadDefaultLoansFail('error'));
    fixture.detectChanges();
    expect(compiled.querySelector('.notification-error').classList.contains('show-warning')).toBeTruthy();
  });
});
