using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Cart


    {
        public Cart() { }

        public Cart(string id)
        {
            Id = id;
        }

        public string Id { get; set; }

        public List<CartItem> Item { get; set; } = new List<CartItem>();
    }
}
