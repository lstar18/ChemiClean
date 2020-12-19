using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChemiCleanBackEnd.Data;
using ChemiCleanBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChemiCleanBackEnd.Controllers
{
    [Route("api/favorites")]
    [ApiController]
    public class FavoritesController : FirebaseEnabledController
    {
        FavoritesRepo _repo;
        public FavoritesController(FavoritesRepo repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IActionResult GetAllFavorites()
        {
            var allFavorites = _repo.GetAll();

            return Ok(allFavorites);
        }

        [HttpPost("{productId}")]
        public IActionResult CreateFavorite(int productId)
        {
            var favorite = new Favorites { ProductId = productId, Uid = UserId };

            _repo.AddFavorite(favorite);

            return Created($"/api/favorites/{favorite.ProductId}", favorite);
        }

        [HttpGet("{productId}")]
        public IActionResult GetByFavoriteById(int productId)
        {
            var singleFavoriteProduct = _repo.GetByFavoriteByProductId(UserId, productId);
            if (singleFavoriteProduct == null) return NotFound("No Favorite with that product ID was found");
            return Ok(singleFavoriteProduct);
        }

        [HttpDelete("{favoriteId}")]
        public IActionResult DeleteProduct(int favoriteId)
        {
            if (_repo.GetById(favoriteId) == null)
            {
                return NotFound();
            }
            _repo.Remove(favoriteId);

            return Ok();
        }
    }


}

