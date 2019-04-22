using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public interface IEMARepository : IBaseRepository<EMA>
  {
    decimal CalculateEMA(int length, List<string[]> candleSticks, string symbol, string interval, int assetPairId);
    decimal CalculateSMA(int length, List<decimal> closingPrices);
    decimal CalculateInitialEMA(int length, List<string[]> candleSticks, string interval, int assetPairId);
  }
}
