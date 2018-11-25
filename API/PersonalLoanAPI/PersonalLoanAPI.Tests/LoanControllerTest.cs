using Microsoft.VisualStudio.TestTools.UnitTesting;
using PersonalLoanAPI.Controllers.api;
using System.Threading.Tasks;
using System.Web.Http;

namespace PersonalLoanAPI.Tests
{
    [TestClass]
    public class LoanControllerTest
    {
        [TestMethod]
        [ExpectedException(typeof(HttpResponseException))]
        public async Task LoanController_ThrowException_WithNullParam()
        {
            LoansController controller = new LoansController();

            await controller.GetNewLoans(null);
        }
    }
}
