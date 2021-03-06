using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using CryptoIndicatorAlerts.Shared;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public class RSIRepository : RepositoryBase<RSI>, IRSIRepository
  {
    public RSIRepository(RepositoryContext repositoryContext)
      :base(repositoryContext)
    {
      RepositoryContext = repositoryContext;
    }

    public decimal CalculateAvgGainAlpha(decimal gain, decimal prevAvgGain)
    {
      decimal multiplier = Math.Round(2m / (14m + 1m), 4);
      decimal multiplier2 = 1m / 14m;
      return Math.Round(gain * multiplier2 +  prevAvgGain * (1 - multiplier2), 8);
    }

    public decimal CalculateAvgGain(IEnumerable<decimal> rsiPeriods)
    {
      return Math.Round(rsiPeriods.Average(x => x), 8);
    }

    public decimal CalculateAvgLoss(IEnumerable<decimal> rsiPeriods)
    {
      return Math.Round(rsiPeriods.Average(x => x), 8);
    }

    public decimal CalculateAvgLossAlpha(decimal loss, decimal prevAvgLoss)
    {
      decimal multiplier = Math.Round(2m / (14m + 1m), 4);
      decimal multiplier2 = 1m / 14m;
      return Math.Round(loss * multiplier2 + prevAvgLoss * (1 - multiplier2), 8); 
    }

    public decimal CalculateChange(decimal previous, decimal current)
    {
      return current - previous;
    }

    public decimal CalculateRS(decimal avgGain, decimal avgLoss)
    {
      return Math.Round(avgGain / avgLoss, 8);
    }

    public decimal CalcSmoothRS(decimal prevAvgGain, decimal prevAvgLoss, decimal gain, decimal loss)
    {
      return ((prevAvgGain * 13m) + gain) / 14m / (((prevAvgLoss * 13m) + loss) / 14m);
    }

    public decimal CalculateRSI(decimal avgLoss, decimal RS)
    {
      return Math.Round(100m - (100m / (1m + RS)), 2);
    }

    public void CreateInitialRSIValues(List<string[]> candleSticks, string interval, int assetId, out List<RSI> rsiInputs)
    {
      rsiInputs = new List<RSI>();

      for (int i = 0; i < candleSticks.Count; i++)
      {
        if (i == 0)
        {
          RSI rsi = new RSI();
          rsi.AssetPairId = assetId;
          rsi.Interval = interval;
          rsi.OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
          rsi.CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
          rsiInputs.Add(rsi);
          Create(rsi);

        }
        else if (i <= 13)
        {
          RSI rsi = new RSI();
          rsi.AssetPairId = assetId;
          rsi.Interval = interval;
          rsi.OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
          rsi.CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
          rsi.Change = CalculateChange(Convert.ToDecimal(candleSticks[i - 1][4]),
                                                Convert.ToDecimal(candleSticks[i][4]));
          rsi.Gain = (rsi.Change > 0) ? rsi.Change : 0;
          rsi.Loss = (rsi.Change < 0) ? -rsi.Change : 0;
          rsiInputs.Add(rsi);
          Create(rsi);

        }
        else if (i == 14)
        {
          RSI rsi = new RSI();
          rsi.AssetPairId = assetId;
          rsi.Interval = interval;
          rsi.OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
          rsi.CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
          rsi.Change = CalculateChange(Convert.ToDecimal(candleSticks[i - 1][4]),
                                                Convert.ToDecimal(candleSticks[i][4]));
          rsi.Gain = (rsi.Change > 0) ? rsi.Change : 0;
          rsi.Loss = (rsi.Change < 0) ? -rsi.Change : 0;
          rsiInputs.Add(rsi);
          rsi.AvgGain = CalculateAvgGain(rsiInputs.Where(x => x.Change != null).Select(x => x.Gain.Value));
          rsi.AvgLoss = CalculateAvgLoss(rsiInputs.Where(x => x.Change != null).Select(x => x.Loss.Value));
          rsi.RS = rsi.AvgGain.Value / rsi.AvgLoss.Value;
          rsi.RSICalc = CalculateRSI(rsi.AvgLoss.Value, rsi.RS.Value);
          Create(rsi);

        }
        else
        {
          RSI rsi = new RSI();
          rsi.AssetPairId = assetId;
          rsi.Interval = interval;
          rsi.OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
          rsi.CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
          rsi.Change = CalculateChange(Convert.ToDecimal(candleSticks[i - 1][4]),
                                                Convert.ToDecimal(candleSticks[i][4]));
          rsi.Gain = (rsi.Change > 0) ? rsi.Change : 0;
          rsi.Loss = (rsi.Change < 0) ? -rsi.Change : 0;
          rsiInputs.Add(rsi);
          rsi.AvgGain = CalculateAvgGainAlpha(rsi.Gain.Value, rsiInputs[i - 1].AvgGain.Value);
          rsi.AvgLoss = CalculateAvgLossAlpha(rsi.Loss.Value, rsiInputs[i - 1].AvgLoss.Value);
          rsi.RS = CalculateRS(rsi.AvgGain.Value, rsi.AvgLoss.Value);
          rsi.RSICalc = CalculateRSI(rsi.AvgLoss.Value, rsi.RS.Value);
          Create(rsi);
        }
      }

      Save();

    }

    public void Create14PeriodRSIValues(List<string[]> candleSticks, string interval, int assetId, out List<RSI> rsiInputs)
    {
      rsiInputs = new List<RSI>();
      List<RSI> previous2RSIs;
      previous2RSIs = FindByCondition(x => x.AssetPairId == assetId && x.Interval == interval).OrderByDescending(x => x.OpenTime).Take(2).ToList();

      for (int i = 0; i < candleSticks.Count; i++)
      {
        if(i == 0 && candleSticks[i][0] == previous2RSIs[0].OpenTimeUnix.ToString() && candleSticks[i][6] == previous2RSIs[0].CloseTimeUnix.ToString())
        {
          previous2RSIs[0].Close = Convert.ToDecimal(candleSticks[i][4]);
          previous2RSIs[0].Change = CalculateChange(previous2RSIs[1].Close, Convert.ToDecimal(candleSticks[i][4]));
          previous2RSIs[0].Gain = (previous2RSIs[0].Change > 0) ? previous2RSIs[0].Change : 0;
          previous2RSIs[0].Loss = (previous2RSIs[0].Change < 0) ? -previous2RSIs[0].Change : 0;
          previous2RSIs[0].AvgGain = CalculateAvgGainAlpha(previous2RSIs[0].Gain.Value, previous2RSIs[1].AvgGain.Value);
          previous2RSIs[0].AvgLoss = CalculateAvgLossAlpha(previous2RSIs[0].Loss.Value, previous2RSIs[1].AvgLoss.Value);
          previous2RSIs[0].RS = CalculateRS(previous2RSIs[0].AvgGain.Value, previous2RSIs[0].AvgLoss.Value);
          previous2RSIs[0].RSICalc = CalculateRSI(previous2RSIs[0].AvgLoss.Value, previous2RSIs[0].RS.Value);
          rsiInputs.Add(previous2RSIs[0]);
          Update(previous2RSIs[0]);
        }
        else if(i == 0)
        {
          RSI rsi = new RSI();
          rsi.AssetPairId = assetId;
          rsi.Interval = interval;
          rsi.OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
          rsi.CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
          rsi.Change = CalculateChange(previous2RSIs[0].Close, Convert.ToDecimal(candleSticks[i][4]));
          rsi.Gain = (rsi.Change > 0) ? rsi.Change : 0;
          rsi.Loss = (rsi.Change < 0) ? -rsi.Change : 0;
          rsi.AvgGain = CalculateAvgGainAlpha(rsi.Gain.Value, previous2RSIs[0].AvgGain.Value);
          rsi.AvgLoss = CalculateAvgLossAlpha(rsi.Loss.Value, previous2RSIs[0].AvgLoss.Value);
          rsi.RS = CalculateRS(rsi.AvgGain.Value, rsi.AvgLoss.Value);
          rsi.RSICalc = CalculateRSI(rsi.AvgLoss.Value, rsi.RS.Value);
          rsiInputs.Add(rsi);
          Create(rsi);
        }
        else
        {
          RSI rsi = new RSI();
          rsi.AssetPairId = assetId;
          rsi.Interval = interval;
          rsi.OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
          rsi.CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
          rsi.Change = CalculateChange(Convert.ToDecimal(candleSticks[i - 1][4]), Convert.ToDecimal(candleSticks[i][4]));
          rsi.Gain = (rsi.Change > 0) ? rsi.Change : 0;
          rsi.Loss = (rsi.Change < 0) ? -rsi.Change : 0;
          rsi.AvgGain = CalculateAvgGainAlpha(rsi.Gain.Value, rsiInputs[i - 1].AvgGain.Value);
          rsi.AvgLoss = CalculateAvgLossAlpha(rsi.Loss.Value, rsiInputs[i - 1].AvgLoss.Value);
          rsi.RS = CalculateRS(rsi.AvgGain.Value, rsi.AvgLoss.Value);
          rsi.RSICalc = CalculateRSI(rsi.AvgLoss.Value, rsi.RS.Value);
          rsiInputs.Add(rsi);
          Create(rsi);
        }
          
      }

      Save();
    }
  }
}
