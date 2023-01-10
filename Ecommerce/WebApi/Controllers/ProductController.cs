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
        public async Task<ActionResult<Pagination<ProductDtos>>> GetProducts([FromQuery] ProductSpecificationParams productParams)
        {
            var spec = new ProductWithCategoryAndBrandSpecification(productParams);

            var products = (await _productRepository.GetAllWithSpec(spec));

            var specCount = new ProductForCountingSpecification(productParams);

            var totalProducts = await _productRepository.CountAsync(specCount);

            var rounded = Math.Ceiling(Convert.ToDecimal(totalProducts / productParams.PageSize));

            var totalPages = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductDtos>>(products);

            return Ok(
                new Pagination<ProductDtos>
                {
                    Count = totalProducts,
                    Data = data,
                    PageCount = totalPages,
                    PageIndex = productParams.PageIndex,
                    PageSize = productParams.PageSize

                }


                );
        }



        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDtos>> GetProduct(int id)
        {

            var spec = new ProductWithCategoryAndBrandSpecification(id);
            var product = await _productRepository.GetByIdWithSpec(spec);

            if (product == null)
            {
                return NotFound(new CodeErrorResponse(404));
            }

            return _mapper.Map<Product, ProductDtos>(product);
        }


        [HttpPost]
        public async Task<ActionResult<Product>> Post(Product product)
        {
            var result = await _productRepository.Add(product);

            if (result == 0)
            {
                throw new Exception("Product not found");
            }
            return Ok(product);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> Put(int id, Product product)
        {
            product.Id = id;
            var result = await _productRepository.Update(product);

            if (result == 0)
            {
                throw new Exception("Product not found");
            }
            return Ok(product);
        }

    }
}
