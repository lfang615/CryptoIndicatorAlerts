using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Models
{
  public class OrderExecution
  {
    public int Id { get; set; }
    public string Symbol { get; set; }
    public string Side { get; set; }
    public int Quantity { get; set; }
    public decimal Price { get; set; }
    public DateTime Time { get; set; }

  }
}
