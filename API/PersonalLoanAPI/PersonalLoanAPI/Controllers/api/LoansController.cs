using PersonalLoanAPI.DataAccess;
using PersonalLoanAPI.Models;
using PersonalLoanAPI.Models.api;
using PersonalLoanAPI.Models.database;
using PersonalLoanAPI.Services;
using PersonalLoanAPI.Services.Filters;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PersonalLoanAPI.Controllers.api
{
    [EnableCors(origins: "http://localhost:4200", headers: "", methods:"*")]
    [APIExceptionFilter]
    public class LoansController : ApiController
    {
        LoanService loanService;
        ErrorService errorService;
        public LoansController()
        {
            loanService = new LoanService();
            errorService = new ErrorService();
        }
        [Route("api/loans/getDefaultLoans")]
        public async Task<IEnumerable<LoanApi>> GetDefaultLoans()
        {
            return await loanService.GetDefaultLoans();
        }
        
        [Route("api/loans/getNewLoans")]
        public async Task<IEnumerable<LoanApi>> GetNewLoans(RequestLoanParams requestParams)
        {
            if (requestParams == null || requestParams.loanLevel == 0)
            {
                var error = new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound)
                {
                    Content = new StringContent("No Personal Loan is found.")
                });

                // Log Exception
                Errors err = new Errors()
                {
                    ExceptionType = error.GetType().ToString(),
                    Message = error.Message,
                    Date = DateTime.Today
                };
                errorService.LogError(err);
                throw error;
            }
            return await loanService.GetNewLoans(requestParams);
        }
    }
}
