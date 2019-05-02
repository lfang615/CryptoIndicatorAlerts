using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class AlterColConstraintMACD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Signal",
                table: "MACDs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "MACD_Calc",
                table: "MACDs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "EMA_26",
                table: "MACDs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "EMA_12",
                table: "MACDs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<decimal>(
                name: "Close",
                table: "MACDs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Signal",
                table: "MACDs",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "MACD_Calc",
                table: "MACDs",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "EMA_26",
                table: "MACDs",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "EMA_12",
                table: "MACDs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Close",
                table: "MACDs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");
        }
    }
}
