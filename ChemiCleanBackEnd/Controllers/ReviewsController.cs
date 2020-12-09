using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChemiCleanBackEnd.Data;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChemiCleanBackEnd.Controllers
{
    [Route("api/reviews")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        ReviewsRepo _repo;
        public ReviewsController(ReviewsRepo repo)
        {
            _repo = repo;
        }
       
        // GET: api/reviews
        [HttpGet]
        public IActionResult GetAllReviews()
        {
            var allReviews = _repo.GetAll();

            return Ok(allReviews);
        }

        // GET api/reviews/2
        [HttpGet("{reviewId}")]
        public IActionResult GetById(int reviewId)
        {
            var singleProduct = _repo.GetByReviewId(reviewId);
            if (singleProduct == null) return NotFound("No Product with that ID was found");
            return Ok(singleProduct);
        }

        // POST api/<ReviewsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ReviewsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ReviewsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
