using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CryptoIndicatorAlerts.Models
{
  public class Settings
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [ReadOnly(true)]
    public int Id { get; set; }
    public string VolMA { get; set; }
    public bool MovingAvg1_Enable { get; set; }
    public string MovingAvg1_Time { get; set; }
    public string MovingAvg1_Short { get; set; }
    public string MovingAvg1_Med { get; set; }
    public string MovingAvg1_Long { get; set; }
    public bool MovingAvg2_Enable { get; set; }
    public string MovingAvg2_Time { get; set; }
    public int MovingAvg2_Short { get; set; }
    public int MovingAvg2_Med { get; set; }
    public int MovingAvg2_Long { get; set; }
    public bool MovingAvg3_Enable { get; set; }
    public string MovingAvg3_Time { get; set; }
    public int MovingAvg3_Short { get; set; }
    public int MovingAvg3_Med { get; set; }
    public int MovingAvg3_Long { get; set; }
    public bool EMA1_Enable { get; set; }
    public string EMA1_Time { get; set; }
    public int EMA_Short { get; set; }
    public int EMA_Med { get; set; }
    public int EMA_Long { get; set; }
    public bool EMA2_Enable { get; set; }
    public string EMA2_Time { get; set; }
    public int EMA2_Short { get; set; }
    public int EMA2_Med { get; set; }
    public int EMA2_Long { get; set; }
    public bool EMA3_Enable { get; set; }
    public string EMA3_Time { get; set; }
    public int EMA3_Short { get; set; }
    public int EMA3_Med { get; set; }
    public int EMA3_Long { get; set; }
    public bool RSI_Enable { get; set; }
    public string RSI_1 { get; set; }
    public string RSI_2 { get; set; }
    public string RSI_3 { get; set; }
    public bool MACD_Enable { get; set; }
    public string MACD_1 { get; set; }
    public string MACD_2 { get; set; }
    public string MACD_3 { get; set; }
    public int AssetPairId { get; set; }
    [ForeignKey("AssetPairId")]
    public AssetPair AssetPair { get; set; }
  }
}
