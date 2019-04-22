using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class FixPropertyTypoInModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CloseTIme",
                table: "RSIs",
                newName: "CloseTime");

            migrationBuilder.RenameColumn(
                name: "CloseTIme",
                table: "EMAs",
                newName: "CloseTime");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CloseTime",
                table: "RSIs",
                newName: "CloseTIme");

            migrationBuilder.RenameColumn(
                name: "CloseTime",
                table: "EMAs",
                newName: "CloseTIme");
        }
    }
}
