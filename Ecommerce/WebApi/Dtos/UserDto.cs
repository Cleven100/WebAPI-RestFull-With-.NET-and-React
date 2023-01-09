using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Dtos
{
    public class UserDto
    {
        public string Name { get; set; }
        public string NickName { get; set; }

    
        public string Email { get; set; }
        public string UserName { get; set; }

        public string Token { get; set; }
    }
}
