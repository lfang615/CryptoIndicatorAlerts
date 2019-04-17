using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class AddDecimalConstraintRSI_RSICalc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "RSICalc",
                table: "RSIs",
                type: "decimal(5,2)",
                nullable: false,
                oldClrType: typeof(decimal));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "RSICalc",
                table: "RSIs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5,2)");
        }
    }
}
