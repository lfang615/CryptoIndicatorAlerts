using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public interface IMACDRepository : IBaseRepository<MACD>
  {
    MACD CalculateInitialMACD(string symbol, string interval);
    MACD CalculateMACD(string symbol, string interval);
  }
}
