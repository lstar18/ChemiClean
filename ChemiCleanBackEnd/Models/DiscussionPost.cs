using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Models
{
    public class DiscussionPost
    {
        public int postId { get; set; }
        public string uid { get; set; }
        public string entry { get; set; }
        public string postTitle { get; set; }
        public int discussionId { get; set; }
    }
}
