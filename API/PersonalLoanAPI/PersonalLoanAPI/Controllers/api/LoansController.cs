using PersonalLoanAPI.DataAccess;
using PersonalLoanAPI.Models;
using PersonalLoanAPI.Models.api;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace PersonalLoanAPI.Controllers.api
{
    public class LoansController : ApiController
    {
        [Route("api/loans/getDefaultLoans")]
        public async Task<IEnumerable<Loan>> GetDefaultLoans()
        {
            using (var db = new PersonalLoanContext())
            {
                return await db.Loans.Where(x => x.IsDefaultLoan)
                    .Select(x => new Loan()
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

        [Route("api/loans/getNewLoans")]
        public async Task<IEnumerable<Loan>> GetNewLoans(RequestLoanParams requestParams)
        {
            using (var db = new PersonalLoanContext())
            {
                return await db.Loans.Where(x => x.LoanLevel == requestParams.loanLevel && !requestParams.refNumbers.Contains(x.RefNumber))
                    .Select(x => new Loan()
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
