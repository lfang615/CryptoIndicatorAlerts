using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;

namespace CryptoIndicatorAlerts.Models
{
  public class AssetPair
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [ReadOnly(true)]
    public int Id { get; set; }
    public string BaseName { get; set; }
    public string QuoteName { get; set; }
    public bool IsSelected { get; set; }
    public virtual ICollection<RSI> RSIs { get; set; }
  }
}
