using PersonalLoanAPI.Models.database;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace PersonalLoanAPI.DataAccess
{
    public class PersonalLoanContext : DbContext
    {
        public PersonalLoanContext() : base("PersonalLoanContext")
        {
        }

        public virtual DbSet<Loan> Loans { get; set; }

        public virtual DbSet<Errors> Errors { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}