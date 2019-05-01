using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class CreateMACD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "MACD",
                table: "EMAs",
                type: "decimal(7,6)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Signal",
                table: "EMAs",
                type: "decimal(7, 6)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "MACDs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Interval = table.Column<string>(nullable: true),
                    OpenTime = table.Column<DateTime>(nullable: false),
                    OpenTimeUnix = table.Column<long>(nullable: false),
                    Close = table.Column<decimal>(nullable: false),
                    EMA_12 = table.Column<decimal>(nullable: false),
                    EMA_26 = table.Column<decimal>(nullable: true),
                    MACD_Calc = table.Column<decimal>(nullable: true),
                    Signal = table.Column<decimal>(nullable: true),
                    AssetPairId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MACDs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MACDs_AssetPairs_AssetPairId",
                        column: x => x.AssetPairId,
                        principalTable: "AssetPairs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MACDs_AssetPairId",
                table: "MACDs",
                column: "AssetPairId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MACDs");

            migrationBuilder.DropColumn(
                name: "MACD",
                table: "EMAs");

            migrationBuilder.DropColumn(
                name: "Signal",
                table: "EMAs");
        }
    }
}
