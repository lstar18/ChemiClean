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
    public class FavoritesRepo
    {
        static readonly List<Favorites> _favorites = new List<Favorites>();
        readonly string _connectionString;
        public FavoritesRepo(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ChemiClean");
        }
        public IEnumerable<Favorites> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = $"select * from favorites";

            var favorites = db.Query<Favorites>(sql);

            return favorites;
        }
        public IEnumerable<Favorites> GetAllFavoritesByUid(string UserId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select * 
                                from Favorites
                                where Favorites.Uid = @fuid";

            var parameters = new { fuid = UserId };

            var favorites = db.Query<Favorites>(sql, parameters);

            return favorites;
        }
        public Favorites GetByFavoriteByProductId(string UserId, int productId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select *
                          from Favorites
                          where Favorites.productId = @pid
                          and Favorites.Uid = @fuid";

            var parameters = new 
            { pid = productId,
              fuid = UserId,
            };
            var favorite = db.QueryFirstOrDefault<Favorites>(sql, parameters);

            return favorite;
        }

        public void AddFavorite(Favorites favoriteToAdd)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Favorites]
                               ([Uid]
                               ,[ProductId])
                               Output inserted.favoriteId
                            VALUES
                                (@uid,@productid)";

            var newId = db.ExecuteScalar<int>(sql, favoriteToAdd);

            favoriteToAdd.Id = newId;
        }
    }
}
