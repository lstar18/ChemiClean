using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChemiCleanBackEnd.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChemiCleanBackEnd.Controllers
{
    [Route("api/productwithreview")]
    [ApiController]
    public class ProductWithReviewController : ControllerBase
    {
        readonly ProductWithReviewRepo _repo;
        public ProductWithReviewController(ProductWithReviewRepo repo)
        {
            _repo = repo;
        }
        // Get: api/productwithreview/2/reviews
        [HttpGet("{productId}/reviews")]

        public IActionResult GetReviewItemwithProductId(int productId)
        {
            var reviews = _repo.GetReviewsWithProduct(productId);

            if (reviews == null) return NotFound();

            return Ok(reviews);
        }
    }
}
