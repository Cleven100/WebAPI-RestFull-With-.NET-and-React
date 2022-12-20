using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class ProductWithCategoryAndBrandSpecification : BaseSpecification<Product>
    {

        public ProductWithCategoryAndBrandSpecification()
        {
            AddInclude(p => p.Category);
            AddInclude(p => p.Brand);
            AddOrderBy(p => p.Price);
        }

        public ProductWithCategoryAndBrandSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(p => p.Category);
            AddInclude(p => p.Brand);
        }



    }
}
