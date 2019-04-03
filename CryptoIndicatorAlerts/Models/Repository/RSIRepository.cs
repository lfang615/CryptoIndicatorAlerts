using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public class RSIRepository : RepositoryBase<RSI>, IRSIRepository
  {
    const decimal alpha = 1 / 14;
    public RSIRepository(RepositoryContext repositoryContext)
      :base(repositoryContext)
    {
      RepositoryContext = repositoryContext;
    }

    public decimal CalculateAvgGainAlpha(decimal gain, decimal prevAvgGain)
    {
      return gain * alpha + (1 - alpha) * prevAvgGain;
    }

    public decimal CalculateAvgLoss(IEnumerable<decimal> rsiPeriods)
    {
      return rsiPeriods.Average(x => x);
    }

    public decimal CalculateAvgLossAlpha(decimal loss, decimal prevAvgLoss)
    {
      return loss * alpha + (1 - alpha) * prevAvgLoss;
    }

    public decimal CalculateChange(decimal previous, decimal current)
    {
      return previous - current;
    }

    public decimal CalculateRS(decimal avgGain, decimal avgLoss)
    {
      return avgGain / avgLoss;
    }

    public decimal CalculateRSI(decimal avgLoss, decimal RS)
    {
      if(avgLoss == 0)
      {
        return 100;
      }
      else
      {
        return 100 - (100 / (1 + RS));
      }
    }

    decimal IRSIRepository.CalculateAvgGain(IEnumerable<decimal> rsiPeriods)
    {
      return rsiPeriods.Average(x => x);
    }
  }
}
