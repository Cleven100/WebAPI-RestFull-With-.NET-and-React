﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Direction
    {
        public int Id { get; set; }
        public string Street { get; set; }
        public string City { get; set; }

        public string Zone { get; set; }

        public string ZipCode { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}
