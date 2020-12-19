using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using ChemiCleanBackEnd.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace ChemiCleanBackEnd.Data
{
    public class ProductsRepo
    {
        static List<Product> _products = new List<Product>();
        readonly string _connectionString;
        public ProductsRepo(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ChemiClean");
        }
        public void AddProduct(Product productToAdd)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Products]
                               ([Uid]
                               ,[title]
                               ,[description]
                               ,[imageUrl]
                               ,[rating])
                               Output inserted.ProductId
                            VALUES
                                (@uid,@title,@description,@imageUrl,@rating)";

            var newId = db.ExecuteScalar<int>(sql, productToAdd);

            productToAdd.ProductId = newId;
        }

        public IEnumerable<Product> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = $"select * from products";

            var products = db.Query<Product>(sql);

            return products;
        }

        public Product GetById(int productId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Products
                          where productId = @pid";

            var parameters = new { pid = productId };

            var products = db.QueryFirstOrDefault<Product>(query, parameters);

            return products;
        }
        public IEnumerable<FavoriteProducts> GetAllFavoritesByUid(string UserId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select p.* , f.favoriteId
                                from favorites f
                                join products p on p.productId = f.productId
                                where f.Uid = @fuid";

            var parameters = new { fuid = UserId };

            var favorites = db.Query<FavoriteProducts>(sql, parameters);

            return favorites;
        }
        public Product Update(int id, Product product)
        {
            var sql = @"UPDATE [dbo].[Products]
                            SET [Uid] = @uid
                               ,[title] = @title
                               ,[description] = @description
                               ,[imageUrl] = @imageUrl
                               ,[rating] = @rating
                            output inserted.*
                            WHERE ProductId = @productId";
            using var db = new SqlConnection(_connectionString);


            var parameters = new
            {
                product.Uid,
                product.title,
                product.description,
                product.imageUrl,
                product.rating,
                ProductId = id
            };

            var updatedProducts = db.QueryFirstOrDefault<Product>(sql, parameters);

            return updatedProducts;
        }
        public void Remove(int productId)
        {
            var sql = @"DELETE
                        FROM [dbo].[Products]
                        WHERE ProductId = @productid";

            using var db = new SqlConnection(_connectionString);

            db.Execute(sql, new { productid = productId });
        }

    }
}
