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

        public ProductWithCategoryAndBrandSpecification(string sort, int? brand, int? category) 
            : base(x => (!brand.HasValue || x.BrandId == brand) && (!category.HasValue || x.CategoryId == category)
            
            )

        {
            AddInclude(p => p.Category);
            AddInclude(p => p.Brand);
            // AddOrderBy(p => p.Price);

            if(!string.IsNullOrEmpty(sort))
            {
                switch (sort)
                {
                    case "nameAsc":
                        AddOrderBy(p => p.Name);
                        break;
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                            break;
                    case "descriptionAsc":
                        AddOrderBy(p => p.Description);
                        break;

                    default: AddOrderBy(p => p.Name);
                        break;
                }
            }
        }

        public ProductWithCategoryAndBrandSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(p => p.Category);
            AddInclude(p => p.Brand);
        }



    }
}
