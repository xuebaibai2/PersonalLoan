export enum LoanLevel {
    Low = 1,
    Mid,
    High
}

export class LoadNewLoanParam {
    constructor(public loanLevel: LoanLevel) {}
}
