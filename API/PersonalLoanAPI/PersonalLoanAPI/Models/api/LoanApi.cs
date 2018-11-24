using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalLoanAPI.Models.api
{
    public class LoanApi
    {
        public string refNumber { get; set; }
        public string name { get; set; }
        public int balance { get; set; }
        public int interest { get; set; }
        public int earlyPaymentFee { get; set; }
        public int payoutAmount { get; set; }
    }
}