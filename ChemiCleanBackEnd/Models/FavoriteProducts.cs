using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Models
{
    public class FavoriteProducts
    {
            public int ProductId { get; set; }
            public int FavoriteId { get; set; }
            public string Uid { get; set; }
            public string title { get; set; }
            public string description { get; set; }
            public string imageUrl { get; set; }
            public string rating { get; set; }

    }
}
