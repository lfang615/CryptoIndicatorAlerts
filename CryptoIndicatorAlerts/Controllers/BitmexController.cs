using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using CryptoIndicatorAlerts.Models;

namespace CryptoIndicatorAlerts.Controllers
{
  public class BitmexController : ControllerBase
  {
    private readonly IOptions<BitmexAPIKey> _bitmexAPIKey;

    public BitmexController(IOptions<BitmexAPIKey> bitmexAPIKey)
    {
      _bitmexAPIKey = bitmexAPIKey;
    }


  }
}
