using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models.Repository
{
  public class AssetPairRepository : RepositoryBase<AssetPair>, IAssetPairRepository
  {
    public AssetPairRepository(RepositoryContext repositoryContext)
      :base(repositoryContext)
    {

    }
  }
}
