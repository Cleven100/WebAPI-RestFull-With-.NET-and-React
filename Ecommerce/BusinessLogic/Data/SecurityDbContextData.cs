using Core.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Data
{
    public class SecurityDbContextData
    {
        public static async Task SeedUserAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    Name = "Pedro",
                    NickName = "Pedrinho",
                    UserName = "pedr",
                    Email = "pedr100@gmail.com",
                    Direction = new Direction
                    {
                        Street = "New York 152",
                        City = "New York",
                        ZipCode = "545454",
                        Zone = "EUA"
                    }
                };

                await userManager.CreateAsync(user, "HojeTreis1235@1!");
            }

            if(!roleManager.Roles.Any())
            {
                var role = new IdentityRole
                {
                    Name = "ADMIN"
                };
                await roleManager.CreateAsync(role);
            }


        }

        public static Task SeedUserAsync(UserManager<User> userManager, object roleManager)
        {
            throw new NotImplementedException();
        }
    }
}
