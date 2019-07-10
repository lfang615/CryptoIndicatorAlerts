using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using CryptoIndicatorAlerts.Models;
using System.Net.Http;
using Newtonsoft.Json;
using CryptoIndicatorAlerts.Exchanges;

namespace CryptoIndicatorAlerts.Controllers
{
  public class BitmexController : ControllerBase
  {
    private readonly IOptions<BitmexAPIKey> _bitmexAPIKey;
    private readonly IHttpClientFactory _clientFactory;

    public BitmexController(IOptions<BitmexAPIKey> bitmexAPIKey,
                            IHttpClientFactory clientFactory)
    {
      _bitmexAPIKey = bitmexAPIKey;
      _clientFactory = clientFactory;
    }

    [HttpGet("api/orders")]
    public string GetOrders()
    {
      Bitmex bitmex = new Bitmex(_bitmexAPIKey.Value.Key, _bitmexAPIKey.Value.Secret);

      string orders = bitmex.GetOrders();
      return "Hello World!!";
    }

  }
}
