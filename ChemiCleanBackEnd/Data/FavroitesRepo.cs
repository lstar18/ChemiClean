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
        public Favorites GetByFavoriteId(string Uid, int productId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Favorites
                          where Favorites.productId = @pid
                          and Favorites.Uid = @fuid";

            var parameters = new 
            { pid = productId,
              fuid = Uid
            };
            var favorite = db.QueryFirstOrDefault<Favorites>(query, parameters);

            return favorite;
        }

        internal object GetByFavoriteId(int favoritesId)
        {
            throw new NotImplementedException();
        }
    }
}
