using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CryptoIndicatorAlerts.Models
{
  public class MACD
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [ReadOnly(true)]
    public int Id { get; set; }
    public string Interval { get; set; }
    public DateTime OpenTime { get; set; }
    public long OpenTimeUnix { get; set; }
    public decimal Close { get; set; }
    public decimal EMA_12 { get; set; }
    public decimal EMA_26 { get; set; }
    public decimal MACD_Calc { get; set; }
    public decimal Signal { get; set; }
    public int AssetPairId { get; set; }
    [ForeignKey("AssetPairId")]
    public AssetPair AssetPair { get; set; }

  }
}