using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class AddColumnInterval_To_RSI : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Interval",
                table: "RSIs",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Interval",
                table: "RSIs");
        }
    }
}
