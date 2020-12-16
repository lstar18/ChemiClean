using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChemiCleanBackEnd.Data;
using ChemiCleanBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChemiCleanBackEnd.Controllers
{
    public abstract class FirebaseEnabledController : ControllerBase
    {
        protected string UserId => User.FindFirst(x => x.Type == "user_id").Value;
    }
    [Route("api/users")]
    [ApiController]
    
    public class UsersController : ControllerBase
    {
        UsersRepo _repo;
        public UsersController(UsersRepo repo)
        {
            _repo = repo;
        }

        // GET: api/users
        [HttpGet]
        public IActionResult GetAllUsers() 
        {
            var allUsers = _repo.GetAll();

            return Ok(allUsers);
        }
        [HttpGet("{UserId}")]
        public IActionResult GetUserByUid(string UserId)
        {
            var user = _repo.GetUserByUid(UserId);

            if (user == null) return NotFound("No user found with that Firebase uid");

            return Ok(user);
        }

       [HttpPost]
        public IActionResult AddNewUser(User user)
        {
            _repo.AddUser(user);
            return Created($"/api/users/{user.Id}", user);
        }

        //// PUT api/users/5
        //[HttpPut("{userId}")]
        //public IActionResult UpdatedUser(int userId, User userToUpdate)
        //{
        //    var updatedUser = _repo.Update(userId, userToUpdate);

        //    return Ok(updatedUser);
        //}

        //// DELETE api/users/5
        //[HttpDelete("{userId}")]
        //public IActionResult DeleteUser(int userId)
        //{
        //    if(_repo.GetById(userId) == null)
        //    {
        //        NotFound();
        //    }
        //    _repo.Remove(userId);
        //    return Ok();
        //}
    }
}
