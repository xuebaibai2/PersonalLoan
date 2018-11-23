using PersonalLoanAPI.DataAccess;
using PersonalLoanAPI.Models.api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PersonalLoanAPI.Controllers.api
{
    public class LoansController : ApiController
    {
        PersonalLoanContext dbContext = new PersonalLoanContext();

        public Loan Get()
        {
            var temp = dbContext.Loans.SingleOrDefault();
            return new Loan()
            {
                refNumber = "933217230",
                name = "Tempore fuga quaerat",
                balance = 1225,
                interest = 282,
                earlyPaymentFee = 145,
                payoutAmount = 1762
            };
        }
    }
}
