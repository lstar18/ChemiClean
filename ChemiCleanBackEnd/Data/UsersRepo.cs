using ChemiCleanBackEnd.Models;
using Dapper;
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

        public User GetById(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select *
                        from Users
                        where Id = @uid";

            var parameters = new { id = userId };

            var singleUser = db.QueryFirstOrDefault<User>(sql, parameters);

            return singleUser;
        }

        public void AddUser(User userToAdd)
        {
            var sql = @"INSERT INTO [dbo].[Users]
                                ([Uid])
                        Output inserted.id

                     VALUES
                        (@uid)";

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
