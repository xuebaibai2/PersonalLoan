import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../models/loan.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as CONSTVALUE from '../shared/const-value';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) {
   }

   getDefaultLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(CONSTVALUE.URI_GET_DEFAULT_LOANS).pipe(
      catchError((err: any) => throwError(err.error))
    );
  }

  getNewLoans(loanLevel: string): Observable<Loan[]> {
    return this.http.get<Loan[]>(CONSTVALUE.URI_GET_NEW_LOANS, {
      params: {'loanLevel': loanLevel}}).pipe(
     catchError((err: any) => throwError(err.error))
    );
  }

}
