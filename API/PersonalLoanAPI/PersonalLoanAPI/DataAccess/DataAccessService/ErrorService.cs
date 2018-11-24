using PersonalLoanAPI.DataAccess;
using PersonalLoanAPI.Models.database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalLoanAPI.DataAccess.DataAccessService
{
    public class ErrorService
    {
        public void LogError(Errors err)
        {
            using (var db = new PersonalLoanContext())
            {
                db.Errors.Add(err);
                db.SaveChanges();
            }
        }
    }
}