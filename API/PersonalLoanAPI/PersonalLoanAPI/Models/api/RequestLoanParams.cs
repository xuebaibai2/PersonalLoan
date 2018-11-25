using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PersonalLoanAPI.Models.api
{
    public class RequestLoanParams
    {
        [Required]
        public LoanLevel loanLevel { get; set; }
    }
}