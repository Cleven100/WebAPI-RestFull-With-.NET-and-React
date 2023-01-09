using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace BusinessLogic.Data
{
    public class CartRepository : ICartRepository
    {
        private readonly IDatabase _database;

        public CartRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();

        }



        public async Task<bool> DeleteCartAsync(string cartId)
        {
          return await  _database.KeyDeleteAsync(cartId);
        }

        public async Task<Cart> GetCartAsync(string cartId)
        {
            var data = await _database.StringGetAsync(cartId);

           return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<Cart>(data);



        }

        public async Task<Cart> UpdateCartAsync(Cart cart)
        {

            var status = await _database.StringSetAsync(cart.Id, JsonSerializer.Serialize(cart),
                 TimeSpan.FromDays(30)
                 );

            if (!status) return null;

            return  await GetCartAsync(cart.Id);


        }
    }
}
