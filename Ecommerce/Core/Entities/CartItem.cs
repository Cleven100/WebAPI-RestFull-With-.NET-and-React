﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class CartItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public int Amount { get; set; }

        public string Image { get; set; }

        public string Brand { get; set; }

        public string Category { get; set; }



    }
}
