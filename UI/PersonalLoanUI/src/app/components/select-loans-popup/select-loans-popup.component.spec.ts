import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLoansPopupComponent } from './select-loans-popup.component';

describe('SelectLoansPopupComponent', () => {
  let component: SelectLoansPopupComponent;
  let fixture: ComponentFixture<SelectLoansPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLoansPopupComponent ]
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
