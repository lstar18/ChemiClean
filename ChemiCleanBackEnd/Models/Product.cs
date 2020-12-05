using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string uid { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string imageUrl { get; set; }
        public string rating { get; set; }
        public int reviewId { get; set; }

    }
}
