import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLoansPopupItemComponent } from './select-loans-popup-item.component';

describe('SelectLoansPopupItemComponent', () => {
  let component: SelectLoansPopupItemComponent;
  let fixture: ComponentFixture<SelectLoansPopupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLoansPopupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLoansPopupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
