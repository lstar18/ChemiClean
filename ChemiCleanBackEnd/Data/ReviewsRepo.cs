using ChemiCleanBackEnd.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Data
{
    public class ReviewsRepo
    {
        static List<Review> _reviews = new List<Review>();

        const string _connectionString = "Server = localhost; Database = ChemiClean; Trusted_Connection = True;";
        public IEnumerable<Review> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = $"select * from Reviews";

            var reviews = db.Query<Review>(sql);

            return reviews;
        }

        public Review GetByReviewId(int reviewId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Reviews
                          where reviewId = @rid";

            var parameters = new { rid = reviewId };

            var reviews = db.QueryFirstOrDefault<Review>(query, parameters);

            return reviews;
        }
    }
}
