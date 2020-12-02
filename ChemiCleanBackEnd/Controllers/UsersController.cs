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
    [Route("api/users")]
    [ApiController]
    
    public class UsersController : ControllerBase
    {
        UsersRepo _repo;
        public UsersController()
        {
            _repo = new UsersRepo();
        }

        // GET: api/users
        [HttpGet]
        public IActionResult GetAllUsers() 
        {
            var allUsers = _repo.GetAll();

            return Ok(allUsers);
        }

        // GET api/users/1
        [HttpGet("{userId}")]
        public IActionResult GetById(int userId)
        {
            var singleUser = _repo.GetById(userId);
            if (singleUser == null) return NotFound("No User with that ID was found");
            return Ok(singleUser); 
        }

       [HttpPost]
        public IActionResult AddNewUser(User userToAdd)
        {
            _repo.AddUser(userToAdd);
            return Created($"/ api / users /{ userToAdd.Id}", userToAdd);
        }

        // PUT api/users/5
        [HttpPut("{userId}")]
        public IActionResult UpdatedUser(int userId, User userToUpdate)
        {
            var updatedUser = _repo.Update(userId, userToUpdate);

            return Ok(updatedUser);
        }

        // DELETE api/users/5
        [HttpDelete("{userId}")]
        public IActionResult DeleteUser(int userId)
        {
            if(_repo.GetById(userId) == null)
            {
                NotFound();
            }
            _repo.Remove(userId);
            return Ok();
        }
    }
}
