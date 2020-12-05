using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChemiCleanBackEnd.Models
{
    public class Discussion
    {
        public int discussionId { get; set; }
        public string uid { get; set; }
        public string topic { get; set; }
        public DateTime dateCreated { get; set; }
        
    }
}
