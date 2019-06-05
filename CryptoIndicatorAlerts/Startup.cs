using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using CryptoIndicatorAlerts.Models;
using CryptoIndicatorAlerts.Models.Repository;
using Microsoft.EntityFrameworkCore;

namespace CryptoIndicatorAlerts
{
  public class Startup
  {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    private readonly IConfiguration _config;
    public Startup(IConfiguration configuration)
    {
      _config = configuration;
    }
    public void ConfigureServices(IServiceCollection services)
    {
      var connectionString = _config["connectionString"];
      services.AddDbContext<RepositoryContext>(o => o.UseSqlServer(connectionString));
      services.AddScoped<IAssetPairRepository, AssetPairRepository>();
      services.AddScoped<IRSIRepository, RSIRepository>();
      services.AddScoped<IEMARepository, EMARepository>();
      services.AddScoped<IMACDRepository, MACDRepository>();
      services.AddScoped<ISettingsRepository, SettingsRepository>();
      services.AddMvc();
      services.AddHttpClient();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.Use(async (context, next) =>
      {
        await next();
        if (context.Response.StatusCode == 404 &&
           !Path.HasExtension(context.Request.Path.Value) &&
           !context.Request.Path.Value.StartsWith("/api/"))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });
      app.UseMvc();
      app.UseDefaultFiles();
      app.UseStaticFiles();
      //if (env.IsDevelopment())
      //{
      //    app.UseDeveloperExceptionPage();
      //}

      //app.Run(async (context) =>
      //{
      //    await context.Response.WriteAsync("Hello World!");
      //});
    }
  }
}
