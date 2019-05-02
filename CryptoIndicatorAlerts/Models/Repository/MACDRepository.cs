using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CryptoIndicatorAlerts.Shared;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public class MACDRepository : RepositoryBase<MACD>, IMACDRepository
  {
    public MACDRepository(RepositoryContext repositoryContext)
      : base(repositoryContext)
    {
      RepositoryContext = repositoryContext;
    }
    public MACD CalculateInitialMACD(string symbol, string interval, List<string[]> candleSticks)
    {
      int assetPairId = RepositoryContext.AssetPairs.Where(x => x.BaseName + x.QuoteName == symbol).Select(x => x.Id).First();
      decimal sma12 = CalculateSMA(12, candleSticks.Select(x => Convert.ToDecimal(x[4])).Take(12).ToList());
      decimal sma26 = CalculateSMA(26, candleSticks.Select(x => Convert.ToDecimal(x[4])).Take(26).ToList());

      List<decimal> macdList = new List<decimal>();
      decimal rollingEMA12 = 0;
      decimal rollingEMA26 = 0;
      decimal macd = 0;
      decimal signal = 0;

      for (int i = 12; i < candleSticks.Count; i++)
      {
        if (i == 12)
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), sma12);
        }
        else if (i > 12 && i < 26)
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), rollingEMA12);
        }
        else if (i == 26)
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), rollingEMA12);
          rollingEMA26 = CalculateEMA(26, Convert.ToDecimal(candleSticks[i][4]), sma26);
          macdList.Add(rollingEMA12 - rollingEMA26);
        }
        else if (i > 26 && i < 34)
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), rollingEMA12);
          rollingEMA26 = CalculateEMA(26, Convert.ToDecimal(candleSticks[i][4]), rollingEMA26);
          macdList.Add(rollingEMA12 - rollingEMA26);
        }
        else if (i == 34)
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), rollingEMA12);
          rollingEMA26 = CalculateEMA(26, Convert.ToDecimal(candleSticks[i][4]), rollingEMA26);
          macdList.Add(rollingEMA12 - rollingEMA26);
          signal = Math.Round(macdList.Average(), 7);
        }
        else if (i > 34 && i < candleSticks.Count - 2)
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), rollingEMA12);
          rollingEMA26 = CalculateEMA(26, Convert.ToDecimal(candleSticks[i][4]), rollingEMA26);
          macd = rollingEMA12 - rollingEMA26;
          signal = CalculateEMA(9, macd, signal);
        }
        else if (i == candleSticks.Count - 2)
        {
          // Also create EMA for period prior to current candle
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), rollingEMA12);
          rollingEMA26 = CalculateEMA(26, Convert.ToDecimal(candleSticks[i][4]), rollingEMA26);
          macd = rollingEMA12 - rollingEMA26;
          signal = CalculateEMA(9, macd, signal);

          MACD prevEMA = new MACD
          {
            Interval = interval,
            AssetPairId = assetPairId,
            OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]),
            OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]),
            Close = Convert.ToDecimal(candleSticks[i][4]),
            EMA_12 = rollingEMA12,
            EMA_26 = rollingEMA26,
            MACD_Calc = macd,
            Signal = signal
          };
          Create(prevEMA);
        }
        else
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), rollingEMA12);
          rollingEMA26 = CalculateEMA(26, Convert.ToDecimal(candleSticks[i][4]), rollingEMA26);
          macd = rollingEMA12 - rollingEMA26;
          signal = CalculateEMA(9, macd, signal);
        }
      }

      // Current MACD
      MACD currentMACD = new MACD
      {
        Interval = interval,
        AssetPairId = assetPairId,
        OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[candleSticks.Count - 1][0]),
        OpenTimeUnix = Convert.ToInt64(candleSticks[candleSticks.Count - 1][0]),
        Close = Convert.ToDecimal(candleSticks[candleSticks.Count - 1][4]),
        EMA_12 = rollingEMA12,
        EMA_26 = rollingEMA26,
        MACD_Calc = macd,
        Signal = signal
      };

      Create(currentMACD);
      Save();
      return currentMACD;

    }

    public MACD CalculateMACD(string symbol, string interval, List<string[]> candleSticks)
    {
      List<MACD> macds = FindByCondition(x => x.AssetPair.BaseName + x.AssetPair.QuoteName == symbol
                          && x.Interval == interval).OrderByDescending(x => x.OpenTime).Take(2).ToList();

      MACD macdItem = new MACD();
      int assetPairId = macds[0].AssetPairId;
      decimal rollingEMA12 = 0;
      decimal rollingEMA26 = 0;
      decimal macd = 0;
      decimal signal = 0;

      for (int i = 0; i < candleSticks.Count; i++)
      {
        if (i == 0)
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), macds[1].EMA_12);
          rollingEMA26 = CalculateEMA(26, Convert.ToDecimal(candleSticks[i][4]), macds[1].EMA_26.Value);
          macd = rollingEMA12 - rollingEMA26;
          signal = CalculateEMA(9, macd, macds[1].Signal.Value);
          if (macds[0].OpenTimeUnix.ToString() == candleSticks[i][0])
          {
            macds[0].EMA_12 = rollingEMA12;
            macds[0].EMA_26 = rollingEMA26;
            macds[0].MACD_Calc = macd;
            macds[0].Signal = signal;
            Update(macds[0]);
          }
          else
          {
            macdItem = new MACD
            {
              Interval = interval,
              AssetPairId = assetPairId,
              OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]),
              OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]),
              Close = Convert.ToDecimal(candleSticks[i][4]),
              EMA_12 = rollingEMA12,
              EMA_26 = rollingEMA26,
              MACD_Calc = macd,
              Signal = signal
            };
            Create(macdItem);
          }
        }
        else
        {
          rollingEMA12 = CalculateEMA(12, Convert.ToDecimal(candleSticks[i][4]), rollingEMA12);
          rollingEMA26 = CalculateEMA(26, Convert.ToDecimal(candleSticks[i][4]), rollingEMA26);
          macd = rollingEMA12 - rollingEMA26;
          signal = CalculateEMA(9, macd, signal);

          macdItem = new MACD
          {
            Interval = interval,
            AssetPairId = assetPairId,
            OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[i][0]),
            OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]),
            Close = Convert.ToDecimal(candleSticks[i][4]),
            EMA_12 = rollingEMA12,
            EMA_26 = rollingEMA26,
            MACD_Calc = macd,
            Signal = signal
          };

          Create(macdItem);
        }
      }

      Save();

      return macdItem;

    }

    private decimal CalculateSMA(int length, List<decimal> closingPrices)
    {
      return closingPrices.Average() / length;
    }

    private decimal CalculateEMA(int length, decimal closingPrice, decimal prevEMA)
    {
      decimal multiplier = Math.Round(2m / (Convert.ToDecimal(length) + 1m), 7);

      return Math.Round(closingPrice * multiplier + prevEMA * (1m - multiplier), 7);
    }
  }
}
