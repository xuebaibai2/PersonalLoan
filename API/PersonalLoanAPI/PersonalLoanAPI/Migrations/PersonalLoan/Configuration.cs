namespace PersonalLoanAPI.Migrations.PersonalLoan
{
    using DataAccess;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<PersonalLoanAPI.DataAccess.PersonalLoanContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            MigrationsDirectory = @"Migrations\PersonalLoan";
            ContextKey = "PersonalLoanAPI.DataAccess.PersonalLoanContext";
        }

        protected override void Seed(PersonalLoanAPI.DataAccess.PersonalLoanContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
        }
    }
}
