using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChemiCleanBackEnd.Data;
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
        [HttpGet("{favoritesId}")]
        public IActionResult GetByFavoriteId(int favoritesId)
        {
            var singleFavorite = _repo.GetByFavoriteId(favoritesId);
            if (singleFavorite == null) return NotFound("No Favorite with that ID was found");
            return Ok(singleFavorite);
        }
    }

}
