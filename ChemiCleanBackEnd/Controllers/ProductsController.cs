using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChemiCleanBackEnd.Models;
using ChemiCleanBackEnd.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChemiCleanBackEnd.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : FirebaseEnabledController
    {
        ProductsRepo _repo;
       public ProductsController(ProductsRepo repo)
        {
            _repo = repo;
        }
        
        // GET: api/products
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var allProducts = _repo.GetAll();

            return Ok(allProducts);
        }

        // GET api/products/2
        [HttpGet("{ProductId}")]
        public IActionResult GetById(int ProductId)
        {
            var singleProduct = _repo.GetById(ProductId);
            if (singleProduct == null) return NotFound("No Product with that ID was found");
            return Ok(singleProduct);
        }

        // POST api/<ProductsController>
        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            _repo.AddProduct(product);

            return Created($"/api/products/{product.ProductId}", product);
        }
        [HttpGet("favorites")]
        public IActionResult GetFavoritesByUid()
        {
            var favorite = _repo.GetAllFavoritesByUid(UserId);

            if (favorite == null) return NotFound("No favorites for this UserId");

            var x = favorite.First().FavoriteId;

            return Ok(favorite);
        }


        [HttpPut("{id}")]
        public IActionResult UpdatedProduct(int id, Product products)
        {
            var updatedProducts = _repo.Update(id, products);

            return Ok(updatedProducts);
        }

        //DELETE api/products/2
        [HttpDelete("{productId}")]
        public IActionResult DeleteProduct(int productId)
        {
            if (_repo.GetById(productId) == null)
            {
                return NotFound();
            }
            _repo.Remove(productId);

            return Ok();
        }
    }
}
