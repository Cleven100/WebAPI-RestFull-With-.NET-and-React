using AutoMapper;
using Core.Entities;
using Core.Interface;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Dtos;
using WebApi.Erros;

namespace WebApi.Controllers
{
    
    public class ProductController : BaseApiController
    {
        private readonly IGenericRepository<Product> _productRepository;
        private readonly IMapper _mapper;

        public ProductController(IGenericRepository<Product> productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts(string sort, int? brand, int? category)
        {
            var spec = new ProductWithCategoryAndBrandSpecification(sort, brand, category);

            var products = (await _productRepository.GetAllWithSpec(spec));

            return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductDtos>>(products));
        }



        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDtos>> GetProduct(int id)
        {

            var spec = new ProductWithCategoryAndBrandSpecification(id);
            var product = await _productRepository.GetByIdWithSpec(spec);

            if(product == null)
            {
                return NotFound(new CodeErrorResponse(404));
            }

           return _mapper.Map<Product, ProductDtos>(product);
        }

    }
}
