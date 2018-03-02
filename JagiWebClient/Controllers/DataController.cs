using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JagiWebClient.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JagiWebClient.Controllers
{
    [Route("api/Products")]
    public class Productontroller : Controller
    {
        public IActionResult Get()
        {
            return Ok(new List<Product> {
                new Product { Id = 1, Title = "First Item", Price = 9.9M },
                new Product { Id = 2, Title = "Second Item", Price = 19.9M },
                new Product { Id = 3, Title = "Third Item", Price = 14.9M }
            });
        }

        [HttpPost, Authorize]
        public IActionResult Post([FromBody]Order order)
        {
            return Ok();
        }
    }
}