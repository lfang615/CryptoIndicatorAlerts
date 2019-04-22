using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class ColConstraintsEMA : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Close",
                table: "EMAs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AddColumn<decimal>(
                name: "EMACalc",
                table: "EMAs",
                type: "decimal(9,8)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EMACalc",
                table: "EMAs");

            migrationBuilder.AlterColumn<decimal>(
                name: "Close",
                table: "EMAs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");
        }
    }
}
