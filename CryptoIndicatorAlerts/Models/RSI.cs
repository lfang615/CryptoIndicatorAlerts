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
    public DateTime OpenTime { get; set; }
    public long OpenTimeUnix { get; set; }
    public DateTime CloseTIme { get; set; }
    public long CloseTimeUnix { get; set; }
    public decimal Close { get; set; }
    public decimal Change { get; set; }
    public decimal Gain { get; set; }
    public decimal Loss { get; set; }
    public decimal AvgGain { get; set; }
    public decimal AvgLoss { get; set; }
    public decimal RS { get; set; }
    public decimal RSICalc { get; set; }
    public int AssetPairId { get; set; }
    [ForeignKey("AssetPairId")]
    public AssetPair AssetPair { get; set; }
  }
}
