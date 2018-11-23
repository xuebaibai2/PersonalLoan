using PersonalLoanAPI.Models.database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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
                actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError);
            } else if(actionExecutedContext.Exception is HttpResponseException)
            {
                actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.NotFound)
                {
                    Content = new StringContent("No Personal Loan is found.")
                };
            }

            // Log Exception
            Errors err = new Errors()
            {
                ExceptionType = actionExecutedContext.Exception.GetType().ToString(),
                Message = actionExecutedContext.Exception.Message,
                Date = DateTime.Today
            };
            errorService.LogError(err);

            actionExecutedContext.Response = new HttpResponseMessage(HttpStatusCode.BadRequest);
        }
    }
}