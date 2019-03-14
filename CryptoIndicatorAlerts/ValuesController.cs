using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using CryptoIndicatorAlerts.Models;
using CryptoIndicatorAlerts.Models.Repository;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CryptoIndicatorAlerts
{
  
  public class ValuesController : Controller
  {
    private readonly IHttpClientFactory _clientFactory;
    private IAssetPairRepository _assetPairRepo;

    public ValuesController(IHttpClientFactory clientFactory, IAssetPairRepository assetPairRepo)
    {
      _clientFactory = clientFactory;
      _assetPairRepo = assetPairRepo;
    }

    // GET: api/<controller>
    [HttpGet("api/test")]
    public IEnumerable<string> Get()
    {
      return new string[] { "test1", "test2" };
    }

    [HttpGet("api/binancepairs")]
    public async Task<IEnumerable<string>> GetBinancePairs()
    {
      var request = new HttpRequestMessage(HttpMethod.Get,
         "https://api.binance.com/api/v3/ticker/price");
      
      var client = _clientFactory.CreateClient();

      var response = await client.SendAsync(request);

      if (response.IsSuccessStatusCode)
      {
        var result = await response.Content.ReadAsStringAsync();

        List<Dictionary<string, string>> assetPairsList = JsonConvert.DeserializeObject<List<Dictionary<string, string>>>(result);

        return assetPairsList.Select(x => x["symbol"]).Where(x => x.ToString().EndsWith("BTC"));
      }
      else
      {
        return null;
      }

    }

    //// GET api/<controller>/5
    //[HttpGet("{id}")]
    //public string Get(int id)
    //{
    //    return "value";
    //}

    //// POST api/<controller>
    //[HttpPost]
    //public void Post([FromBody]string value)
    //{
    //}

    //// PUT api/<controller>/5
    //[HttpPut("{id}")]
    //public void Put(int id, [FromBody]string value)
    //{
    //}

    //// DELETE api/<controller>/5
    //[HttpDelete("{id}")]
    //public void Delete(int id)
    //{
    //}
  }
}
