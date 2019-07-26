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
      //List<Dictionary<string, string>> ordersJson = JsonConvert.DeserializeObject<List<Dictionary<string, string>>>(orders);

      return orders;
      
    }

    [HttpPut("api/orders")]
    public IActionResult EditOrder([FromBody] Order order)
    {
      Bitmex bitmex = new Bitmex(_bitmexAPIKey.Value.Key, _bitmexAPIKey.Value.Secret);

      try
      {
        return Ok(bitmex.EditOrder(order.Id, order.OrderQty, order.Price));
      }
      catch(Exception ex)
      {
        return BadRequest();
      }
       
    }

    [HttpPost("api/orders")]
    public IActionResult CreateOrder([FromBody] Order order)
    {
      Bitmex bitmex = new Bitmex(_bitmexAPIKey.Value.Key, _bitmexAPIKey.Value.Secret);

      try
      {
        return Ok(bitmex.PostOrders(order.Side, order.OrdType, order.OrderQty, order.Price, order.StopPx));
      }
      catch (Exception ex)
      {
        return BadRequest();
      }
    }

  }
}
