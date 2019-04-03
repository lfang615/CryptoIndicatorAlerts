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
using CryptoIndicatorAlerts.Utility;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CryptoIndicatorAlerts
{

  public class ValuesController : Controller
  {
    private readonly IHttpClientFactory _clientFactory;
    private IAssetPairRepository _assetPairRepo;
    private IRSIRepository _rsiRepo;

    public ValuesController(IHttpClientFactory clientFactory,
                            IAssetPairRepository assetPairRepo,
                            IRSIRepository rsiRepository)
    {
      _clientFactory = clientFactory;
      _assetPairRepo = assetPairRepo;
      _rsiRepo = rsiRepository;
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
    public string GetPair(int id)
    {
      return JsonConvert.SerializeObject(_assetPairRepo.FindByCondition(x => x.Id == id).First());
    }

    [HttpGet("api/volume/{symbol}/{interval}")]
    public async Task<string> GetVolume(string symbol, string interval)
    {
      var request = new HttpRequestMessage(HttpMethod.Get,
         "https://api.binance.com/api/v1/klines?symbol=" + symbol + "&interval="
         + interval + "&limit=21");

      var client = _clientFactory.CreateClient();

      var response = await client.SendAsync(request);

      if (response.IsSuccessStatusCode)
      {
        var result = await response.Content.ReadAsStringAsync();

        List<string[]> candleSticks = JsonConvert.DeserializeObject<List<string[]>>(result);

        decimal avgVolume = 0;
        for (int i = 0; i < candleSticks.Count - 1; i++)
        {
          avgVolume += Convert.ToDecimal(candleSticks[i][5]);
        }

        return avgVolume.ToString();
      }
      else
      {
        return null;
      }
    }

    [HttpGet("api/ma/{symbol}/{interval}/{length}")]
    public async Task<string> GetMA(string symbol, string interval, string length)
    {
      var request = new HttpRequestMessage(HttpMethod.Get,
         "https://api.binance.com/api/v1/klines?symbol=" + symbol + "&interval="
         + interval + "&limit=21");

      var client = _clientFactory.CreateClient();

      var response = await client.SendAsync(request);

      if (response.IsSuccessStatusCode)
      {
        var result = await response.Content.ReadAsStringAsync();

        List<string[]> candleSticks = JsonConvert.DeserializeObject<List<string[]>>(result);

        decimal movingAvg = 0;
        for (int i = 0; i < candleSticks.Count - 1; i++)
        {
          movingAvg += Convert.ToDecimal(candleSticks[i][4]);
        }
 
        return Convert.ToString(movingAvg / Convert.ToDecimal(length));
      }
      else
      {
        return null;
      }
    }

    //[HttpGet("api/rsi/{symbol}/{interval}")]
    //public async Task<string> GetRSI(string symbol, string interval)
    //{
    //  int limit = 0;
    //  long startTime = 0;
    //  if (_rsiRepo.FindAll().Count() == 0)
    //  {
    //    limit = 250;
    //  }
    //  else
    //  {
    //    startTime = _rsiRepo.FindByCondition(x => x.AssetPair.BaseName + x.AssetPair.QuoteName == symbol)
    //                         .OrderByDescending(x => x.Id).Select(x => x.OpenTimeUnix).First();
    //  }

    //  var request = new HttpRequestMessage(HttpMethod.Get,
    //    "https://api.binance/com/api/v1/klines?symbol=" + symbol + "&interval=" + interval +
    //    ((limit == 0) ? "&startTime=" + startTime.ToString() : "&limit=" + limit));

    //  var client = _clientFactory.CreateClient();

    //  var response = await client.SendAsync(request);

    //  if (response.IsSuccessStatusCode)
    //  {
    //    var result = await response.Content.ReadAsStringAsync();

    //    List<string[]> candleSticks = JsonConvert.DeserializeObject<List<string[]>>(result);
    //    List<RSI> rsiInputs = new List<RSI>();
    //    if (limit != 0)
    //    {
    //      for (int i = 0; i < candleSticks.Count; i++)
    //      {
    //        if (i == 0)
    //        {
    //          RSI rsi = new RSI();
    //          rsi.OpenTime = Utility.Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
    //          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
    //          rsi.CloseTIme = Utility.Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
    //          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
    //          rsiInputs.Add(rsi);

    //        }
    //        else if (i <= 13)
    //        {
    //          RSI rsi = new RSI();
    //          rsi.OpenTime = Utility.Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
    //          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
    //          rsi.CloseTIme = Utility.Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
    //          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
    //          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
    //          rsi.Change = _rsiRepo.CalculateChange(Convert.ToDecimal(candleSticks[i-1][4]),
    //                                                Convert.ToDecimal(candleSticks[i][4]));
    //          rsi.Gain = (rsi.Change > 0) ? rsi.Change : 0;
    //          rsi.Loss = (rsi.Change < 0) ? -rsi.Change : 0;
    //          rsiInputs.Add(rsi);

    //        }
    //        else if(i == 14)
    //        {
    //          RSI rsi = new RSI();
    //          rsi.OpenTime = Utility.Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
    //          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
    //          rsi.CloseTIme = Utility.Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
    //          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
    //          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
    //          rsi.Change = _rsiRepo.CalculateChange(Convert.ToDecimal(candleSticks[i - 1][4]),
    //                                                Convert.ToDecimal(candleSticks[i][4]));
    //          rsi.Gain = (rsi.Change > 0) ? rsi.Change : 0;
    //          rsi.Loss = (rsi.Change < 0) ? -rsi.Change : 0;
    //          rsiInputs.Add(rsi);
    //          rsi.AvgGain = _rsiRepo.CalculateAvgGain(rsiInputs.Select(x => x.Gain));
    //          rsi.AvgLoss = _rsiRepo.CalculateAvgLoss(rsiInputs.Select(x => x.Loss));

    //        }
    //        else
    //        {
    //          RSI rsi = new RSI();
    //          rsi.OpenTime = Utility.Utility.ConvertFromUnixTimestamp(candleSticks[i][0]);
    //          rsi.OpenTimeUnix = Convert.ToInt64(candleSticks[i][0]);
    //          rsi.CloseTIme = Utility.Utility.ConvertFromUnixTimestamp(candleSticks[i][6]);
    //          rsi.CloseTimeUnix = Convert.ToInt64(candleSticks[i][6]);
    //          rsi.Close = Convert.ToDecimal(candleSticks[i][4]);
    //          rsi.Change = _rsiRepo.CalculateChange(Convert.ToDecimal(candleSticks[i - 1][4]),
    //                                                Convert.ToDecimal(candleSticks[i][4]));
    //          rsi.Gain = (rsi.Change > 0) ? rsi.Change : 0;
    //          rsi.Loss = (rsi.Change < 0) ? -rsi.Change : 0;
    //          rsiInputs.Add(rsi);
    //          rsi.AvgGain = _rsiRepo.CalculateAvgGain(rsiInputs.Select(x => x.Gain));
    //          rsi.AvgLoss = _rsiRepo.CalculateAvgLoss(rsiInputs.Select(x => x.Loss));
    //        }
    //      }

    //    }

    //  }
    //}

    [HttpPut("api/saveitems")]
    public void SaveItems([FromBody]AssetPair[] items)
    {
      foreach (var pair in items)
      {
        if(pair.IsSelected == true)
        {
          AssetPair assetPair = _assetPairRepo.FindByCondition(x => x.Id == pair.Id).FirstOrDefault();
          assetPair.IsSelected = true;
          _assetPairRepo.Update(assetPair);
        }
      }

      _assetPairRepo.Save();
      
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
