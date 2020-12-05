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
        const string _connectionString = "Server = localhost; Database = ChemiClean; Trusted_Connection = True;";

        public IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = $"select * from users";

            var users = db.Query<User>(sql);

            return users;
        }

        public User GetById(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select *
                        from users
                        where id = @uid";

            var parameters = new { uid = userId };

            var singleUser = db.QueryFirstOrDefault<User>(sql, parameters);

            return singleUser;
        }

        public void AddUser(User userToAdd)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Users]
                                ([uid]
                               ,[username]
                               ,[FirstName]
                               ,[LastName]
                               ,[Email]
                               ,[Password]
                               ,[userPhotoUrl])
                        Output inserted.id

                     VALUES
                            (@uid, @username, @FirstName, @LastName, @Email, @Password, @userPhotoUrl)";
            var newId = db.ExecuteScalar<int>(sql, userToAdd);

            userToAdd.id = newId;
        }

        public void Remove(int userId)
        {
            var sql = @"DELETE
                        FROM [dbo].[Users]
                        WHERE id = @id";
            using var db = new SqlConnection(_connectionString);
            db.Execute(sql, new { id = userId });
        }

        public User Update(int id, User userToUpdate)
        {
            var sql = @"UPDATE [dbo].[Users]
                         SET    [uid] = @uid
                               ,[username] = @username
                               ,[FirstName] = @firstName
                               ,[LastName] = @lastName
                               ,[Email] = @email
                               ,[Password] = @password
                               ,[userPhotoUrl] = @userPhotoUrl
                        OUTPUT inserted.* 
                        WHERE id = @id";
            using var db = new SqlConnection(_connectionString);

            var parameters = new
            {
                uid = userToUpdate.uid,
                username = userToUpdate.username,
                firstName = userToUpdate.FirstName,
                lastName = userToUpdate.LastName,
                email = userToUpdate.Email,
                password = userToUpdate.Password,
                userPhotoUrl = userToUpdate.userPhotoUrl,
                id = id
            };

            var updatedUser = db.QueryFirstOrDefault<User>(sql, parameters);

            return updatedUser;
        }

    }
}
