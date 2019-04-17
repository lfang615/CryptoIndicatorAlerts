using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class RSI_SpecifyDecimalColType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "RS",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<decimal>(
                name: "Loss",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<decimal>(
                name: "Gain",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<decimal>(
                name: "Close",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<decimal>(
                name: "Change",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<decimal>(
                name: "AvgLoss",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<decimal>(
                name: "AvgGain",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "RS",
                table: "RSIs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Loss",
                table: "RSIs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Gain",
                table: "RSIs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Close",
                table: "RSIs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Change",
                table: "RSIs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "AvgLoss",
                table: "RSIs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "AvgGain",
                table: "RSIs",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");
        }
    }
}
