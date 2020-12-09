using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Models
{
    public class ProductWithReview
    {
        public int ProductId { get; set; }
        public string Uid { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string Rating { get; set; }
        public List<Review> Reviews {get;set;}

        //public int ReviewId { get; set; }
        //public string Review { get; set; }
        //public string ReviewTitle { get; set; }
        //public DateTime DatePosted { get; set; }
    }
}
