import { Loan } from './loan.model';

export interface Payout {
    loan: Loan;
    amount: number;
}
