import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../models/loan.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) {
   }

   getDefaultLoans(): Observable<Loan[]> {
     return this.http.get<Loan[]>('http://demo5365007.mockable.io/getDefaultLoans')
     .pipe(
       catchError((error: any) => Observable.throw(error.json()))
     );
   }
}
