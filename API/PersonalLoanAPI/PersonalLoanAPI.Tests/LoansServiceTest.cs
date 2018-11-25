using Microsoft.VisualStudio.TestTools.UnitTesting;
using PersonalLoanAPI.Models.database;
using PersonalLoanAPI.Models;
using System.Collections.Generic;
using System.Linq;
using PersonalLoanAPI.DataAccess.DataAccessService;
using System.Threading.Tasks;
using PersonalLoanAPI.Models.api;

namespace PersonalLoanAPI.Tests
{
    [TestClass]
    public class LoansServiceTest
    {
        LoanService _service;
        Loan defaultLoan;
        Loan lowLevelLoan;
        Loan midLevelLoan;
        Loan highLevelLoan;

        [TestInitialize]
        public void InitTest()
        {
            _service = new LoanService();
            defaultLoan = new Loan()
            {
                Name = "DefaultLoan",
                Balance = 1000,
                Interest = 100,
                EarlyPaymentFee = 10,
                PayoutAmount = 1110,
                RefNumber = "000001",
                LoanLevel = LoanLevel.Low,
                IsDefaultLoan = true
            };
            midLevelLoan = new Loan()
            {
                Name = "Mid Loan",
                Balance = 3000,
                Interest = 300,
                EarlyPaymentFee = 30,
                PayoutAmount = 3330,
                RefNumber = "000003",
                LoanLevel = LoanLevel.Mid,
                IsDefaultLoan = false
            };
            highLevelLoan = new Loan()
            {
                Name = "High Loan",
                Balance = 6000,
                Interest = 600,
                EarlyPaymentFee = 60,
                PayoutAmount = 6660,
                RefNumber = "000006",
                LoanLevel = LoanLevel.High,
                IsDefaultLoan = false
            };

        }

        [TestMethod]
        public async Task LoanService_GetDefaultLoans_ReturnDefaultLoans()
        {
            var getCotainedLoan = false;
            _service.CreateNewLoan(defaultLoan);
            var loans = (await _service.GetDefaultLoans()).ToList();
            
            foreach (var loan in loans)
            {
                if (loan.refNumber.Equals(defaultLoan.RefNumber))
                {
                    getCotainedLoan = true;
                    break;
                }
            }

            Assert.IsTrue(getCotainedLoan);
            _service.DeleteLoan(defaultLoan);
        }

        [TestMethod]
        public async Task LoanService_GetDefaultLoans_GetLoanApiType()
        {
            var service = new LoanService();
            var loans = await service.GetDefaultLoans();

            Assert.IsInstanceOfType(loans.FirstOrDefault(), typeof(LoanApi));
        }

        [TestMethod]
        public async Task LoanService_GetNewLoans_ReturnNewLoansWithLowLoanLevel()
        {
            var getCotainedLoan = false;
            _service.CreateNewLoan(defaultLoan);
            var loans = (await _service.GetNewLoans(new RequestLoanParams() { loanLevel = LoanLevel.Low })).ToList();

            foreach (var loan in loans)
            {
                if (loan.refNumber.Equals(defaultLoan.RefNumber))
                {
                    getCotainedLoan = true;
                    break;
                }
            }
            Assert.IsTrue(getCotainedLoan);
            _service.DeleteLoan(defaultLoan);
        }

        [TestMethod]
        public async Task LoanService_GetNewLoans_ReturnNewLoansWithMidLoanLevel()
        {
            var getCotainedLoan = false;
            _service.CreateNewLoan(midLevelLoan);
            var loans = (await _service.GetNewLoans(new RequestLoanParams() { loanLevel = LoanLevel.Mid })).ToList();

            foreach (var loan in loans)
            {
                if (loan.refNumber.Equals(midLevelLoan.RefNumber))
                {
                    getCotainedLoan = true;
                    break;
                }
            }
            Assert.IsTrue(getCotainedLoan);
            _service.DeleteLoan(midLevelLoan);
        }

        [TestMethod]
        public async Task LoanService_GetNewLoans_ReturnNewLoansWithHighLoanLevel()
        {
            var getCotainedLoan = false;
            _service.CreateNewLoan(highLevelLoan);
            var loans = (await _service.GetNewLoans(new RequestLoanParams() { loanLevel = LoanLevel.High })).ToList();

            foreach (var loan in loans)
            {
                if (loan.refNumber.Equals(highLevelLoan.RefNumber))
                {
                    getCotainedLoan = true;
                    break;
                }
            }
            Assert.IsTrue(getCotainedLoan);
            _service.DeleteLoan(highLevelLoan);
        }
        
    }
}
