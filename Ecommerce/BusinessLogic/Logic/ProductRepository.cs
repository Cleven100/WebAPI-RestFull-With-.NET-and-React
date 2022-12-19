using System;
using Core.Interface;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Entities;
using BusinessLogic.Data;
using Microsoft.EntityFrameworkCore;

namespace BusinessLogic.Logic
{
    public class ProductRepository : IProductRepository
    {
        private readonly EcommerceDbContext _context;
        public ProductRepository(EcommerceDbContext context)
        {
            _context = context;
        }


        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Product
                                       .Include(p => p.Brand).Include(p => p.Category).FirstOrDefaultAsync(p => p.Id == id);

        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await _context.Product.Include(p => p.Brand).Include(p => p.Category).ToListAsync();
        }
    }
}
