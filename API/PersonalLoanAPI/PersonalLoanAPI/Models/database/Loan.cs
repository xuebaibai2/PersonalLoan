using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PersonalLoanAPI.Models.database
{
    public class Loan
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Balance { get; set; }
        public int Interest { get; set; }
        public int EarlyPaymentFee { get; set; }
        public int PayoutAmount { get; set; }
        public string RefNumber { get; set; }
        public LoanLevel LoanLevel { get; set; }
        public bool IsDefaultLoan { get; set; }
    }
}