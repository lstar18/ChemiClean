using ChemiCleanBackEnd.Models;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Data
{
    public class UsersRepo
    {
        readonly string _connectionString;

        public UsersRepo(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ChemiClean");
        }


        public IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = $"select * from Users";

            var users = db.Query<User>(sql);

            return users;
        }

      
        public User GetUserByUid(string UserId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select * from Users
                            where Uid = @Fuid";

            var parameters = new { Fuid = UserId };


            var user = db.QueryFirstOrDefault<User>(query, parameters);

            return user;
        }
        public void AddUser(User userToAdd)
        {
            var sql = @"INSERT INTO [dbo].[Users]
                                ([Uid])
                        Output inserted.id

                     SELECT (@uid) 
                     WHERE NOT EXISTS ( SELECT * FROM USERS WHERE Uid = @uid)";

            using var db = new SqlConnection(_connectionString);

            var newId = db.ExecuteScalar<int>(sql, userToAdd);

            userToAdd.Id = newId;
        }

        //public void Remove(int userId)
        //{
        //    var sql = @"DELETE
        //                FROM [dbo].[Users]
        //                WHERE id = @id";
        //    using var db = new SqlConnection(_connectionString);
        //    db.Execute(sql, new { id = userId });
        //}

        //public User Update(int id, User userToUpdate)
        //{
        //    var sql = @"UPDATE [dbo].[Users]
        //                 SET    [uid] = @uid
        //                         OUTPUT inserted.* 
        //                WHERE id = @id";
        //    using var db = new SqlConnection(_connectionString);

        //    var parameters = new
        //    {
        //        uid = userToUpdate.uid,
        //        id = id
        //    };

        //    var updatedUser = db.QueryFirstOrDefault<User>(sql, parameters);

        //    return updatedUser;
        //}

    }
}
