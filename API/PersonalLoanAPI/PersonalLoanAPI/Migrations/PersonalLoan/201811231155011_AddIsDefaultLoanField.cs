namespace PersonalLoanAPI.Migrations.PersonalLoan
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddIsDefaultLoanField : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Loan", "IsDefaultLoan", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Loan", "IsDefaultLoan");
        }
    }
}
