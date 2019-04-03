using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public interface IRSIRepository : IBaseRepository<RSI>
  {
    decimal CalculateChange(decimal previous, decimal current);
    decimal CalculateAvgGain(IEnumerable<decimal> rsiPeriods);
    decimal CalculateAvgLoss(IEnumerable<decimal> rsiPeriods);
    decimal CalculateRS(decimal avgGain, decimal avgLoss);
    decimal CalculateRSI(decimal avgLoss, decimal RS);
    decimal CalculateAvgGainAlpha(decimal gain, decimal prevAvgGain);
    decimal CalculateAvgLossAlpha(decimal loss, decimal prevAvgLoss);
  }
}
