using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class AddColConstraints_EMA : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "EMACalc",
                table: "EMAs",
                type: "decimal(5,4)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "EMACalc",
                table: "EMAs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5,4)");
        }
    }
}
