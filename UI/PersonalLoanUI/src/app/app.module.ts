import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { CarryOverAmountComponent } from './components/carry-over-amount/carry-over-amount.component';
import { LoanDetailComponent } from './components/loan-detail/loan-detail.component';
import { LoanDetailCardComponent } from './components/loan-detail-card/loan-detail-card.component';
import { BtnApplyAmountComponent } from './components/btn-apply-amount/btn-apply-amount.component';
import { BtnApplyNewLoanComponent } from './components/btn-apply-new-loan/btn-apply-new-loan.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CarryOverAmountComponent,
    LoanDetailComponent,
    LoanDetailCardComponent,
    BtnApplyAmountComponent,
    BtnApplyNewLoanComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
