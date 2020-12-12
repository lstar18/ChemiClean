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
    public class FavoritesController : ControllerBase
    {
        FavoritesRepo _repo;
        public FavoritesController(FavoritesRepo repo)
        {
            _repo = repo;
        }
        [HttpPost]
        public IActionResult CreateFavorite(Favorites favorite)
        {
            _repo.AddFavorite(favorite);

            return Created($"/api/favorites/{favorite.ProductId}", favorite);
        }

    }
}
