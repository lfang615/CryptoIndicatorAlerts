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

    [HttpGet("api/binancepairs")]
    public async Task<string> GetBinancePairs()
    {
      var request = new HttpRequestMessage(HttpMethod.Get,
         "https://api.binance.com/api/v3/ticker/price");

      var client = _clientFactory.CreateClient();

      var response = await client.SendAsync(request);

      if (response.IsSuccessStatusCode)
      {
        var result = await response.Content.ReadAsStringAsync();

        List<Dictionary<string, string>> assetPairsList = JsonConvert.DeserializeObject<List<Dictionary<string, string>>>(result);

        if (_assetPairRepo.FindAll().Count() == 0)
        {
          foreach (var item in assetPairsList)
          {
            if (item["symbol"].EndsWith("BTC"))
            {
              AssetPair pair = new AssetPair()
              {
                BaseName = item["symbol"].Split("BTC")[0],
                QuoteName = "BTC"
              };
              _assetPairRepo.Create(pair);
            }

          }

          _assetPairRepo.Save();
        }

        //return assetPairsList.Select(x => x["symbol"]).Where(x => x.ToString().EndsWith("BTC"));
        return JsonConvert.SerializeObject(_assetPairRepo.FindAll());
      }
      else
      {
        return null;
      }

    }

    [HttpGet("api/getpair/{id}")]
    public AssetPair GetPair(int id)
    {
      return _assetPairRepo.FindByCondition(x => x.Id == id).First();
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
