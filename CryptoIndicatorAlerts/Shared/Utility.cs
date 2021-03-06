using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoIndicatorAlerts.Shared
{
  public static class Utility
  {
    public static DateTime ConvertFromUnixTimestamp(string timestamp)
    {
      long time = Convert.ToInt64(timestamp);
      DateTime origin = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
      DateTimeOffset timeOffset = DateTimeOffset.FromUnixTimeMilliseconds(time);
      return timeOffset.LocalDateTime;
    }

  }
}
