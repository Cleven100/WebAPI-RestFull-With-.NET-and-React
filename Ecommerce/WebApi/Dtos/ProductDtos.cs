using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Dtos
{
    public class ProductDtos
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public int Stock { get; set; }
        public int BrandId { get; set; }

        public string BrandName { get; set; }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }


        public decimal Price { get; set; }

        public string Image { get; set; }
    }
}
