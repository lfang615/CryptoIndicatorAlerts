using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class AddCloseTime_ToRsi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UnixDate",
                table: "RSIs",
                newName: "OpenTimeUnix");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "RSIs",
                newName: "OpenTime");

            migrationBuilder.AddColumn<DateTime>(
                name: "CloseTIme",
                table: "RSIs",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<long>(
                name: "CloseTimeUnix",
                table: "RSIs",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CloseTIme",
                table: "RSIs");

            migrationBuilder.DropColumn(
                name: "CloseTimeUnix",
                table: "RSIs");

            migrationBuilder.RenameColumn(
                name: "OpenTimeUnix",
                table: "RSIs",
                newName: "UnixDate");

            migrationBuilder.RenameColumn(
                name: "OpenTime",
                table: "RSIs",
                newName: "Date");
        }
    }
}
