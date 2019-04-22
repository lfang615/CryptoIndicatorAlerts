using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class AddNullableDecimals_RSI : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "RSICalc",
                table: "RSIs",
                type: "decimal(5,2)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(5,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "RS",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Loss",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Gain",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "Change",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "AvgLoss",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");

            migrationBuilder.AlterColumn<decimal>(
                name: "AvgGain",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "RSICalc",
                table: "RSIs",
                type: "decimal(5,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5,2)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "RS",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Loss",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Gain",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Change",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "AvgLoss",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "AvgGain",
                table: "RSIs",
                type: "decimal(9,8)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,8)",
                oldNullable: true);
        }
    }
}
