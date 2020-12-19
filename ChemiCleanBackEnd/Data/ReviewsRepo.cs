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
    public class ReviewsRepo
    {
        static List<Review> _reviews = new List<Review>();

        readonly string _connectionString;
        public ReviewsRepo(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ChemiClean");
        }
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
        public void AddReview(Review reviewToAdd)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Reviews]
                               ([Uid]
                               ,[review]
                               ,[reviewTitle]
                               ,[ProductId])
                               Output inserted.ReviewId
                            VALUES
                                (@uid,@review,@reviewTitle,@ProductId)";

            var newId = db.ExecuteScalar<int>(sql, reviewToAdd);

            reviewToAdd.ReviewId = newId;
        }

        public void Remove(int reviewId)
        {
            var sql = @"DELETE
                        FROM [dbo].[Reviews]
                        WHERE reviewId = @reviewId";

            using var db = new SqlConnection(_connectionString);

            db.Execute(sql, new { ReviewId = reviewId });
        }
    }
}
