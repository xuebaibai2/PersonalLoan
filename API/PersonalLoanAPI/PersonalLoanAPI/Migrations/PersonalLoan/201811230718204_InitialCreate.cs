namespace PersonalLoanAPI.Migrations.PersonalLoan
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Loan",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Balance = c.Int(nullable: false),
                        Interest = c.Int(nullable: false),
                        EarlyPaymentFee = c.Int(nullable: false),
                        PayoutAmount = c.Int(nullable: false),
                        RefNumber = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Loan");
        }
    }
}
