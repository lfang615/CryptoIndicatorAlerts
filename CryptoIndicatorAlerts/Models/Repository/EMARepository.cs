using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using CryptoIndicatorAlerts.Shared;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public class EMARepository : RepositoryBase<EMA>, IEMARepository
  {
    public EMARepository(RepositoryContext repositoryContext)
      : base(repositoryContext)
    {
      RepositoryContext = repositoryContext;
    }
    public decimal CalculateEMA(int length, List<string[]> candleSticks, string symbol, string interval, int assetPairId)
    {
      List<EMA> emas = FindByCondition(x => x.AssetPair.BaseName + x.AssetPair.QuoteName == symbol
                      && x.Interval == interval).OrderByDescending(x => x.OpenTime).Take(2).ToList();

      decimal prevEMA = emas[1].EMACalc;

      decimal currentEMA = 0;
      for (int i = 0; i < candleSticks.Count; i++)
      {
        if (i == 0)
        {

          currentEMA = CalculateEMA(length, Convert.ToDecimal(candleSticks[i][4]), prevEMA);
          if (emas[0].OpenTimeUnix.ToString() == candleSticks[i][0])
          {
            emas[0].EMACalc = currentEMA;
            Update(emas[0]);
          }
          else
          {
            EMA ema = new EMA()
            {
              Interval = interval,
              AssetPairId = assetPairId,
              Length = length,
              OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]),
              OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]),
              CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]),
              CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]),
              Close = Convert.ToDecimal(candleSticks[i][4]),
              EMACalc = currentEMA
            };

            Create(ema);
          }

        }
        else
        {
          currentEMA = CalculateEMA(length, Convert.ToDecimal(candleSticks[i][4]), currentEMA);
          EMA ema = new EMA()
          {
            Interval = interval,
            AssetPairId = assetPairId,
            Length = length,
            OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]),
            OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]),
            CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]),
            CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]),
            Close = Convert.ToDecimal(candleSticks[i][4]),
            EMACalc = currentEMA
          };

          Create(ema);
        }

      }

      Save();

      return currentEMA;

    }

    private decimal CalculateEMA(int length, decimal closingPrice, decimal prevEMA)
    {
      decimal multiplier = Math.Round(2m / (Convert.ToDecimal(length) + 1m), 4);

      return Math.Round((closingPrice - prevEMA) * multiplier + prevEMA, 4);

    }

    public decimal CalculateSMA(int length, List<decimal> closingPrices)
    {
      return closingPrices.Average() / length;
    }

    public decimal CalculateInitialEMA(int length, List<string[]> candleSticks, string interval, int assetPairId)
    {
      decimal ema;

      ema = CalculateSMA(Convert.ToInt32(length),
                                  candleSticks.Select(x => Convert.ToDecimal(x[4])).Take(Convert.ToInt32(length)).ToList());

      decimal rollingEMA = 0;
      for (int i = length; i < candleSticks.Count; i++)
      {
        if (i == length)
        {
          rollingEMA = CalculateEMA(length, Convert.ToDecimal(candleSticks[i][4]), ema);
        }
        else if (i == candleSticks.Count - 2)
        {
          // Also create EMA for period prior current candle
          rollingEMA = CalculateEMA(length, Convert.ToDecimal(candleSticks[i][4]), rollingEMA);
          EMA prevEMA = new EMA
          {
            Interval = interval,
            AssetPairId = assetPairId,
            Length = length,
            OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]),
            OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]),
            CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][6]),
            CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]),
            Close = Convert.ToDecimal(candleSticks[i][4]),
            EMACalc = rollingEMA
          };
          Create(prevEMA);
        }
        else
        {
          rollingEMA = CalculateEMA(length, Convert.ToDecimal(candleSticks[i][4]), rollingEMA);
        }

      }

      EMA firstEMA = new EMA
      {
        Interval = interval,
        AssetPairId = assetPairId,
        Length = length,
        OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[candleSticks.Count - 1][0]),
        OpenTimeUnix = Convert.ToInt64(candleSticks[candleSticks.Count - 1][0]),
        CloseTime = Utility.ConvertFromUnixTimestamp(candleSticks[candleSticks.Count - 1][6]),
        CloseTimeUnix = Convert.ToInt64(candleSticks[candleSticks.Count - 1][6]),
        Close = Convert.ToDecimal(candleSticks[candleSticks.Count - 1][4]),
        EMACalc = rollingEMA
      };

      Create(firstEMA);
      Save();
      return rollingEMA;

    }

  }
}
