using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Models
{
    public class Review
    {
        public int ReviewId { get; set; }
        public string Uid { get; set; }
        public string review { get; set; }
        public string reviewTitle { get; set; }
        public DateTime datePosted { get; set; }
        public int ProductId { get; set; }
        
    }
}
