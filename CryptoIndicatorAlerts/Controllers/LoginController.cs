using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using CryptoIndicatorAlerts.Models;


namespace CryptoIndicatorAlerts.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [AllowAnonymous]
  public class LoginController : ControllerBase
  {
    private IConfiguration _config;

    public LoginController(IConfiguration config)
    {
      _config = config;
    }

    [HttpPost]
    public IActionResult Login([FromBody] User user)
    {
      if(user == null)
      {
        return BadRequest();
      }

      if(user.Email == "azninvasion@att.net" && user.Password == "emda2010ha!")
      {
        return Ok(new { Token = GenerateJWT(user) });
      }
      else
      {
        return Unauthorized();
      }
      
    }

    private string GenerateJWT(User user)
    {
      var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
      var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

      var claims = new[] {
       new Claim(JwtRegisteredClaimNames.Email, user.Email),
       new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
     };

      var token = new JwtSecurityToken(_config["Jwt:Issuer"],
      _config["Jwt:Issuer"],
      claims,
      expires: DateTime.Now.AddMinutes(120),
      signingCredentials: credentials);

      return new JwtSecurityTokenHandler().WriteToken(token);
    }

    
  }

 
}
