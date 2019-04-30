using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace CryptoIndicatorAlerts.Models
{
  public class RepositoryContext : DbContext
  {
    public RepositoryContext(DbContextOptions options)
      :base(options)
    {
    }

    public DbSet<AssetPair> AssetPairs { get; set; }
    public DbSet<RSI> RSIs { get; set; }
    public DbSet<EMA> EMAs { get; set; }
    public DbSet<MACD> MACDs { get; set; }
  }
}
