using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using PersonalLoanAPI.Models.api;
using PersonalLoanAPI.DataAccess;
using System.Data.Entity;

namespace PersonalLoanAPI.DataAccess.DataAccessService
{
    public class LoanService
    {
        public async Task<IEnumerable<LoanApi>> GetDefaultLoans()
        {
            using (var db = new PersonalLoanContext())
            {
                return await db.Loans.Where(x => x.IsDefaultLoan)
                    .Select(x => new LoanApi()
                    {
                        refNumber = x.RefNumber,
                        balance = x.Balance,
                        earlyPaymentFee = x.EarlyPaymentFee,
                        interest = x.Interest,
                        name = x.Name,
                        payoutAmount = x.PayoutAmount
                    }).ToListAsync();
            }
        }

        public async Task<IEnumerable<LoanApi>> GetNewLoans(RequestLoanParams requestParams) {
            using (var db = new PersonalLoanContext())
            {
                return await db.Loans.Where(x => x.LoanLevel == requestParams.loanLevel)
                    .Select(x => new LoanApi()
                    {
                        refNumber = x.RefNumber,
                        balance = x.Balance,
                        earlyPaymentFee = x.EarlyPaymentFee,
                        interest = x.Interest,
                        name = x.Name,
                        payoutAmount = x.PayoutAmount
                    }).ToListAsync();
            }
        }
            

    }
}