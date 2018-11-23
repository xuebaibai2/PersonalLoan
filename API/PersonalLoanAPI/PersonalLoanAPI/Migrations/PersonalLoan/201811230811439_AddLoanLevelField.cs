namespace PersonalLoanAPI.Migrations.PersonalLoan
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddLoanLevelField : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Loan", "LoanLevel", c => c.Int(nullable: false));
            AlterColumn("dbo.Loan", "RefNumber", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Loan", "RefNumber", c => c.Int(nullable: false));
            DropColumn("dbo.Loan", "LoanLevel");
        }
    }
}
