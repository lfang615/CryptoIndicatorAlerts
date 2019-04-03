using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class CryptoIndicatorAlertsModelsRSI : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RSIs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Date = table.Column<DateTime>(nullable: false),
                    Close = table.Column<decimal>(nullable: false),
                    Change = table.Column<decimal>(nullable: false),
                    Gain = table.Column<decimal>(nullable: false),
                    Loss = table.Column<decimal>(nullable: false),
                    AvgGain = table.Column<decimal>(nullable: false),
                    AvgLoss = table.Column<decimal>(nullable: false),
                    RS = table.Column<decimal>(nullable: false),
                    RSICalc = table.Column<decimal>(nullable: false),
                    AssetPairId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RSIs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RSIs_AssetPairs_AssetPairId",
                        column: x => x.AssetPairId,
                        principalTable: "AssetPairs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RSIs_AssetPairId",
                table: "RSIs",
                column: "AssetPairId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RSIs");
        }
    }
}
