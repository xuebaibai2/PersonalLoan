import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLoansPopupComponent } from './select-loans-popup.component';
import { SelectLoansPopupItemComponent } from '../select-loans-popup-item/select-loans-popup-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';

describe('SelectLoansPopupComponent', () => {
  let component: SelectLoansPopupComponent;
  let fixture: ComponentFixture<SelectLoansPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLoansPopupComponent,
      SelectLoansPopupItemComponent ],
      imports: [StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLoansPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
