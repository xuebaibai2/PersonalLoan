using PersonalLoanAPI.Models;
using PersonalLoanAPI.Models.database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalLoanAPI.DataAccess
{
    public class DummyData
    {
        public static List<Loan> getLoans()
        {
            return new List<Loan>()
            {
                new Loan()
                {
                    RefNumber = "933217230",
                    Name = "Tempore fuga quaerat",
                    Balance= 1225,
                    Interest = 282,
                    EarlyPaymentFee = 145,
                    PayoutAmount = 1762,
                    LoanLevel = LoanLevel.Low
                },
                new Loan()
                {
                    RefNumber = "93366630",
                    Name = "Loan 2",
                    Balance= 453,
                    Interest = 14,
                    EarlyPaymentFee = 6234,
                    PayoutAmount = 5234,
                    LoanLevel = LoanLevel.Mid
                },
                new Loan()
                {
                    RefNumber = "933241230",
                    Name = "Loan 3",
                    Balance= 2342,
                    Interest = 234,
                    EarlyPaymentFee = 574,
                    PayoutAmount = 58,
                    LoanLevel = LoanLevel.High
                },
            };
        }
    }
}