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
    public decimal CalculateEMA(int length, List<decimal> closingPrices, decimal prevEMA)
    {
      decimal multiplier = 2 / (length + 1);

      return (closingPrices.Last() - prevEMA) * multiplier + prevEMA;

    }

    private decimal CalculateEMA(int length, decimal closingPrice, decimal prevEMA)
    {
      decimal multiplier = 2 / (length + 1);

      return (closingPrice - prevEMA) * multiplier + prevEMA;

    }

    public decimal CalculateSMA(int length, List<decimal> closingPrices)
    {
      return closingPrices.Average() / length;
    }

    public decimal CalculateInitialEMA(int length, List<string[]> candleSticks)
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
        else
        {
          rollingEMA = CalculateEMA(length, Convert.ToDecimal(candleSticks[i][4]), rollingEMA);
        }
        
      }

      EMA firstEMA = new EMA
      {
        OpenTime = Utility.ConvertFromUnixTimestamp(candleSticks[Convert.ToInt32(length) - 1][0]),
        OpenTimeUnix = Convert.ToInt64(candleSticks[Convert.ToInt32(length) - 1][0]),
        CloseTIme = Utility.ConvertFromUnixTimestamp(candleSticks[Convert.ToInt32(length) - 1][6]),
        CloseTimeUnix = Convert.ToInt64(candleSticks[Convert.ToInt32(length) - 1][6]),
        Close = Convert.ToDecimal(candleSticks[Convert.ToInt32(length) - 1][4]),
        EMACalc = rollingEMA
      };

      Create(firstEMA);

      return rollingEMA;

    }


  }
}
