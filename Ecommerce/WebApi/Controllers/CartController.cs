using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{

    public class CartController : BaseApiController
    {
        private readonly ICartRepository _cart;

        public CartController(ICartRepository cart)
        {
            _cart = cart;

        }

        [HttpGet]
        public async Task<ActionResult<Cart>> GetCartById(string id)
        {
            var cart = await _cart.GetCartAsync(id);
            return Ok(cart ?? new Cart(id));
        }

        [HttpPost]
        public async Task<ActionResult<Cart>> UpdateCart(Cart cartParament)
        {
            var cartUpdated = await _cart.UpdateCartAsync(cartParament);
            return Ok(cartUpdated);
        }

        [HttpDelete]
        public async Task DeleteCart(string id)
        {
          await  _cart.DeleteCartAsync(id);
        }


    }
}
