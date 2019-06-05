using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public class SettingsRepository : RepositoryBase<Settings>, ISettingsRepository
  {
    public SettingsRepository(RepositoryContext repositoryContext)
      :base(repositoryContext)
    {

    }
  }
}
