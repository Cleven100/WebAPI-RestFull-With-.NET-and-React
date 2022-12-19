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
   
    public class CategoryController : BaseApiController
    {
        private readonly IGenericRepository<Category> _categoryRepository;

        public CategoryController(IGenericRepository<Category> categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }



        [HttpGet]
        public async Task<ActionResult<IReadOnlyCollection<Category>>> GetCaregoryAll()
        {
            return Ok(await _categoryRepository.GetAllAsync());
        }

        [HttpGet("{id}")] 
        public async Task<ActionResult<Category>> GetCategoryById(int id) {
            return await _categoryRepository.GetByIdAsync(id);
        }


    }
}
