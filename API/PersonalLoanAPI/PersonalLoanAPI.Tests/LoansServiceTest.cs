using Microsoft.VisualStudio.TestTools.UnitTesting;
using PersonalLoanAPI.DataAccess;
using PersonalLoanAPI.Models.database;
using PersonalLoanAPI.Models;
using System.Collections.Generic;
using System.Linq;
using Moq;
using System.Data.Entity;
using PersonalLoanAPI.DataAccess.DataAccessService;
using System.Data.Entity.Infrastructure;
using System.Threading.Tasks;
using PersonalLoanAPI.Models.api;

namespace PersonalLoanAPI.Tests
{
    [TestClass]
    public class LoansServiceTest
    {

        [TestMethod]
        public async Task LoanService_GetDefaultLoans_ReturnDefaultLoans()
        {
            var data = Seed().AsQueryable();
            var mockSet = GetMockSet(data);

            var mockContext = new Mock<PersonalLoanContext>();
            mockContext.Setup(m => m.Loans).Returns(mockSet.Object);

            var service = new LoanService(mockContext.Object);
            var loans = await service.GetDefaultLoans();

            Assert.AreEqual("Loan 1", loans.FirstOrDefault().name);
        }

        [TestMethod]
        public async Task LoanService_GetDefaultLoans_GetLoanApiType()
        {
            var data = Seed().AsQueryable();
            var mockSet = GetMockSet(data);

            var mockContext = new Mock<PersonalLoanContext>();
            mockContext.Setup(m => m.Loans).Returns(mockSet.Object);

            var service = new LoanService(mockContext.Object);
            var loans = await service.GetDefaultLoans();

            Assert.IsInstanceOfType(loans.FirstOrDefault(), typeof(LoanApi));
        }

        [TestMethod]
        public async Task LoanService_GetNewLoans_ReturnNewLoansWithLowLoanLevel()
        {
            var data = Seed().AsQueryable();
            var mockSet = GetMockSet(data);

            var mockContext = new Mock<PersonalLoanContext>();
            mockContext.Setup(m => m.Loans).Returns(mockSet.Object);

            var service = new LoanService(mockContext.Object);
            var loans = (await service.GetNewLoans(new RequestLoanParams() { loanLevel = LoanLevel.Low })).ToList();
            
            Assert.AreEqual("Loan 1", loans[0].name);
            Assert.AreEqual("Loan 2", loans[1].name);
            Assert.AreEqual("Loan 3", loans[2].name);
        }

        [TestMethod]
        public async Task LoanService_GetNewLoans_ReturnNewLoansWithMidLoanLevel()
        {
            var data = Seed().AsQueryable();
            var mockSet = GetMockSet(data);

            var mockContext = new Mock<PersonalLoanContext>();
            mockContext.Setup(m => m.Loans).Returns(mockSet.Object);

            var service = new LoanService(mockContext.Object);
            var loans = (await service.GetNewLoans(new RequestLoanParams() { loanLevel = LoanLevel.Mid })).ToList();

            Assert.AreEqual("Loan 4", loans[0].name);
            Assert.AreEqual("Loan 5", loans[1].name);
        }

        [TestMethod]
        public async Task LoanService_GetNewLoans_ReturnNewLoansWithHighLoanLevel()
        {
            var data = Seed().AsQueryable();
            var mockSet = GetMockSet(data);

            var mockContext = new Mock<PersonalLoanContext>();
            mockContext.Setup(m => m.Loans).Returns(mockSet.Object);

            var service = new LoanService(mockContext.Object);
            var loans = (await service.GetNewLoans(new RequestLoanParams() { loanLevel = LoanLevel.High })).ToList();

            Assert.AreEqual("Loan 6", loans[0].name);
        }

        private Mock<DbSet<Loan>> GetMockSet(IQueryable<Loan> data)
        {
            var mockSet = new Mock<DbSet<Loan>>();

            mockSet.As<IDbAsyncEnumerable<Loan>>()
                .Setup(m => m.GetAsyncEnumerator())
                .Returns(new TestDbAsyncEnumerator<Loan>(data.GetEnumerator()));

            mockSet.As<IQueryable<Loan>>()
                .Setup(m => m.Provider)
                .Returns(new TestDbAsyncQueryProvider<Loan>(data.Provider));

            mockSet.As<IQueryable<Loan>>().Setup(m => m.Expression).Returns(data.Expression);
            mockSet.As<IQueryable<Loan>>().Setup(m => m.ElementType).Returns(data.ElementType);
            mockSet.As<IQueryable<Loan>>().Setup(m => m.GetEnumerator()).Returns(data.GetEnumerator());

            return mockSet;
        }

        private IEnumerable<Loan> Seed()
        {
            return new[]
            {
                new Loan() {
                    Name = "Loan 1",
                    Balance = 1000,
                    Interest = 100,
                    EarlyPaymentFee = 10,
                    PayoutAmount = 1110,
                    RefNumber = "000001",
                    LoanLevel = LoanLevel.Low,
                    IsDefaultLoan = true
                },
                new Loan() {
                    Name = "Loan 2",
                    Balance = 2000,
                    Interest = 200,
                    EarlyPaymentFee = 20,
                    PayoutAmount = 2220,
                    RefNumber = "000002",
                    LoanLevel = LoanLevel.Low,
                    IsDefaultLoan = true
                },new Loan() {
                    Name = "Loan 3",
                    Balance = 3000,
                    Interest = 300,
                    EarlyPaymentFee = 30,
                    PayoutAmount = 3330,
                    RefNumber = "000003",
                    LoanLevel = LoanLevel.Low,
                    IsDefaultLoan = false
                },new Loan() {
                    Name = "Loan 4",
                    Balance = 4000,
                    Interest = 400,
                    EarlyPaymentFee = 40,
                    PayoutAmount = 4440,
                    RefNumber = "000004",
                    LoanLevel = LoanLevel.Mid,
                    IsDefaultLoan = false
                },new Loan() {
                    Name = "Loan 5",
                    Balance = 5000,
                    Interest = 500,
                    EarlyPaymentFee = 50,
                    PayoutAmount = 5550,
                    RefNumber = "000005",
                    LoanLevel = LoanLevel.Mid,
                    IsDefaultLoan = false
                },new Loan() {
                    Name = "Loan 6",
                    Balance = 6000,
                    Interest = 600,
                    EarlyPaymentFee = 60,
                    PayoutAmount = 6660,
                    RefNumber = "000006",
                    LoanLevel = LoanLevel.High,
                    IsDefaultLoan = false
                }
            };
        }
    }
}
