using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class CreateEMA_Model : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EMAs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Interval = table.Column<string>(nullable: true),
                    OpenTime = table.Column<DateTime>(nullable: false),
                    OpenTimeUnix = table.Column<long>(nullable: false),
                    CloseTIme = table.Column<DateTime>(nullable: false),
                    CloseTimeUnix = table.Column<long>(nullable: false),
                    Close = table.Column<decimal>(nullable: false),
                    AssetPairId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EMAs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EMAs_AssetPairs_AssetPairId",
                        column: x => x.AssetPairId,
                        principalTable: "AssetPairs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EMAs_AssetPairId",
                table: "EMAs",
                column: "AssetPairId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EMAs");
        }
    }
}
