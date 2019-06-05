using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoIndicatorAlerts.Migrations
{
    public partial class SettingsFormModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Settings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    VolMA = table.Column<string>(nullable: true),
                    MovingAvg1_Enable = table.Column<bool>(nullable: false),
                    MovingAvg1_Time = table.Column<string>(nullable: true),
                    MovingAvg1_Short = table.Column<string>(nullable: true),
                    MovingAvg1_Med = table.Column<string>(nullable: true),
                    MovingAvg1_Long = table.Column<string>(nullable: true),
                    MovingAvg2_Enable = table.Column<bool>(nullable: false),
                    MovingAvg2_Time = table.Column<string>(nullable: true),
                    MovingAvg2_Short = table.Column<int>(nullable: false),
                    MovingAvg2_Med = table.Column<int>(nullable: false),
                    MovingAvg2_Long = table.Column<int>(nullable: false),
                    MovingAvg3_Enable = table.Column<bool>(nullable: false),
                    MovingAvg3_Time = table.Column<string>(nullable: true),
                    MovingAvg3_Short = table.Column<int>(nullable: false),
                    MovingAvg3_Med = table.Column<int>(nullable: false),
                    MovingAvg3_Long = table.Column<int>(nullable: false),
                    EMA1_Enable = table.Column<bool>(nullable: false),
                    EMA1_Time = table.Column<string>(nullable: true),
                    EMA_Short = table.Column<int>(nullable: false),
                    EMA_Med = table.Column<int>(nullable: false),
                    EMA_Long = table.Column<int>(nullable: false),
                    EMA2_Enable = table.Column<bool>(nullable: false),
                    EMA2_Time = table.Column<string>(nullable: true),
                    EMA2_Short = table.Column<int>(nullable: false),
                    EMA2_Med = table.Column<int>(nullable: false),
                    EMA2_Long = table.Column<int>(nullable: false),
                    EMA3_Enable = table.Column<bool>(nullable: false),
                    EMA3_Time = table.Column<string>(nullable: true),
                    EMA3_Short = table.Column<int>(nullable: false),
                    EMA3_Med = table.Column<int>(nullable: false),
                    EMA3_Long = table.Column<int>(nullable: false),
                    RSI_Enable = table.Column<bool>(nullable: false),
                    RSI_1 = table.Column<string>(nullable: true),
                    RSI_2 = table.Column<string>(nullable: true),
                    RSI_3 = table.Column<string>(nullable: true),
                    MACD_Enable = table.Column<bool>(nullable: false),
                    MACD_1 = table.Column<string>(nullable: true),
                    MACD_2 = table.Column<string>(nullable: true),
                    MACD_3 = table.Column<string>(nullable: true),
                    AssetPairId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Settings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Settings_AssetPairs_AssetPairId",
                        column: x => x.AssetPairId,
                        principalTable: "AssetPairs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Settings_AssetPairId",
                table: "Settings",
                column: "AssetPairId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Settings");
        }
    }
}
