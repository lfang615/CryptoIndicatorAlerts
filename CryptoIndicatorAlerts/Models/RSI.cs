using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CryptoIndicatorAlerts.Models
{
  public class RSI
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [ReadOnly(true)]
    public int Id { get; set; }
    public string Interval { get; set; }
    public DateTime OpenTime { get; set; }
    public long OpenTimeUnix { get; set; }
    public DateTime CloseTIme { get; set; }
    public long CloseTimeUnix { get; set; }

    [Column(TypeName = "decimal(9,8)")]
    public decimal Close { get; set; }

    [Column(TypeName = "decimal(9,8)")]
    public decimal? Change { get; set; }

    [Column(TypeName = "decimal(9,8)")]
    public decimal? Gain { get; set; }

    [Column(TypeName = "decimal(9,8)")]
    public decimal? Loss { get; set; }

    [Column(TypeName = "decimal(9,8)")]
    public decimal? AvgGain { get; set; }

    [Column(TypeName = "decimal(9,8)")]
    public decimal? AvgLoss { get; set; }

    [Column(TypeName = "decimal(9,8)")]
    public decimal? RS { get; set; }

    [Column(TypeName = "decimal(5,2)")]
    public decimal? RSICalc { get; set; }
    public int AssetPairId { get; set; }
    [ForeignKey("AssetPairId")]
    public AssetPair AssetPair { get; set; }
  }
}
