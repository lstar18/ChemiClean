using ChemiCleanBackEnd.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Data
{
    public class ProductWithReviewRepo
    {
        const string _connectionString = "Server=localhost;Database=ChemiClean;Trusted_Connection=True;";
        public ProductWithReview GetReviewsWithProduct(int productId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @$"select * from Products
                                    where Products.productId = @Id";
            var parameters = new { Id = productId };

            var product = db.QueryFirst<ProductWithReview>(query, parameters);

            var reviews = db.Query<Review>("select * from Reviews where Reviews.productId = @Id", parameters);

            product.Reviews = reviews.ToList();

            return product;
        }
    }
}
