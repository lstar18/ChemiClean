﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using ChemiCleanBackEnd.Models;
using Microsoft.Data.SqlClient;

namespace ChemiCleanBackEnd.Data
{
    public class ProductsRepo
    {
        static List<Product> _products = new List<Product>();

        const string _connectionString = "Server=localhost; Database=ChemiClean; Trusted_Connection=true;";

        public void AddProduct(Product productToAdd)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Products]
                               ([uid]
                               ,[title]
                               ,[description]
                               ,[imageUrl]
                               ,[rating]
                               ,[reviewId])
                               Output inserted.ProductId
                            VALUES
                                (@productId,@uid,@title,@description,@imageUrl,@rating,@reviewId)";

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

        public Product Update(int id, Product product)
        {
            var sql = @"UPDATE [dbo].[Products]
                            SET [uid] = @uid
                               ,[title] = @title
                               ,[description] = @description
                               ,[imageUrl] = @imageUrl
                               ,[rating] = @rating
                               ,[reviewId] = @reviewId
                            output inserted.*
                            WHERE ProductId = @productId";
            using var db = new SqlConnection(_connectionString);


            var parameters = new
            {
                product.uid,
                product.title,
                product.description,
                product.imageUrl,
                product.rating,
                product.reviewId,
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
