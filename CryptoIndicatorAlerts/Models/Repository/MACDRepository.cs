using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public class MACDRepository : RepositoryBase<MACD>, IMACDRepository
  {
    public MACDRepository(RepositoryContext repositoryContext)
      :base(repositoryContext)
    {

    }
    public MACD CalculateInitialMACD(string symbol, string interval)
    {
      throw new NotImplementedException();
    }

    public MACD CalculateMACD(string symbol, string interval)
    {
      throw new NotImplementedException();
    }
  }
}
