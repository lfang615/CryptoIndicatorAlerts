﻿// <auto-generated />
using System;
using CryptoIndicatorAlerts.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CryptoIndicatorAlerts.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    [Migration("20190417015201_IncreaseFloatingPoint_RSI_Props")]
    partial class IncreaseFloatingPoint_RSI_Props
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.2-rtm-30932")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CryptoIndicatorAlerts.Models.AssetPair", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BaseName");

                    b.Property<bool>("IsSelected");

                    b.Property<string>("QuoteName");

                    b.HasKey("Id");

                    b.ToTable("AssetPairs");
                });

            modelBuilder.Entity("CryptoIndicatorAlerts.Models.RSI", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AssetPairId");

                    b.Property<decimal>("AvgGain");

                    b.Property<decimal>("AvgLoss");

                    b.Property<decimal>("Change");

                    b.Property<decimal>("Close");

                    b.Property<DateTime>("CloseTIme");

                    b.Property<long>("CloseTimeUnix");

                    b.Property<decimal>("Gain");

                    b.Property<string>("Interval");

                    b.Property<decimal>("Loss");

                    b.Property<DateTime>("OpenTime");

                    b.Property<long>("OpenTimeUnix");

                    b.Property<decimal>("RS");

                    b.Property<decimal>("RSICalc");

                    b.HasKey("Id");

                    b.HasIndex("AssetPairId");

                    b.ToTable("RSIs");
                });

            modelBuilder.Entity("CryptoIndicatorAlerts.Models.RSI", b =>
                {
                    b.HasOne("CryptoIndicatorAlerts.Models.AssetPair", "AssetPair")
                        .WithMany("RSIs")
                        .HasForeignKey("AssetPairId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
