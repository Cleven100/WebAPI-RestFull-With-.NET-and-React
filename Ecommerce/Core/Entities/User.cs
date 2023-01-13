using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Core.Entities
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public string NickName { get; set; }

        public Direction Direction { get; set; }

        public string Image { get; set; }


    }
}
