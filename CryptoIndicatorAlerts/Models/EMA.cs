using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models
{
  public class EMA
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [ReadOnly(true)]
    public int Id { get; set; }
    public int Length { get; set; }
    public string Interval { get; set; } 
    public DateTime OpenTime { get; set; }
    public long OpenTimeUnix { get; set; }
    public DateTime CloseTime { get; set; }
    public long CloseTimeUnix { get; set; }

    [Column(TypeName = "decimal(9,8)")]
    public decimal Close { get; set; }

    [Column(TypeName = "decimal(5,4)")]
    public decimal EMACalc { get; set; }
    [Column(TypeName = "decimal(7,6)")]
    public decimal? MACD { get; set; }
    [Column(TypeName = "decimal(7, 6)")]
    public decimal? Signal { get; set; }
    public int AssetPairId { get; set; }
    [ForeignKey("AssetPairId")]
    public AssetPair AssetPair { get; set; }
    

  }
}
