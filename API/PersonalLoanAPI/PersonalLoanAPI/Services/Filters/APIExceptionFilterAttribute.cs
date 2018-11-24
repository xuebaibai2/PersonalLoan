using Newtonsoft.Json;
using PersonalLoanAPI.DataAccess.DataAccessService;
using PersonalLoanAPI.Models.database;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web.Http;
using System.Web.Http.Filters;

namespace PersonalLoanAPI.Services.Filters
{
    public class APIExceptionFilterAttribute: ExceptionFilterAttribute
    {
        ErrorService errorService;
        public APIExceptionFilterAttribute()
        {
            errorService = new ErrorService();
        }

        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext.Exception is ArgumentNullException)
            {
                actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent("API is called without required params")
                };
            } else if(actionExecutedContext.Exception is HttpResponseException)
            {
                actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.NotFound)
                {
                    Content = new StringContent("No Personal Loan is found.")
                };
            } else
            {
                actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent("An error occurred during loan request - please try again or contact support")
                };
            }

            // Log exception to the database 
            Errors err = new Errors()
            {
                ExceptionType = actionExecutedContext.Exception.GetType().ToString(),
                Message = actionExecutedContext.Exception.Message,
                Date = DateTime.Now
            };
            errorService.LogError(err);

        }
    }
}