using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApi.Dtos;
using WebApi.Extensions;

namespace WebApi.Controllers
{

    public class UserController : BaseApiController
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly IGenericSecurityRepository<User> _securityRepository;
        private readonly RoleManager<IdentityRole> _roleManager;


        public UserController(UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenService, IMapper mapper, IPasswordHasher<User> passwordHasher, IGenericSecurityRepository<User> securityRepository, RoleManager<IdentityRole> roleManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _tokenService = tokenService;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
            _securityRepository = securityRepository;
            _roleManager = roleManager;


        }


        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {

            var user = await _userManager.FindByEmailAsync(loginDto.Email);
           

            if (User == null)
            {
                return Unauthorized("Error 401");
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
            {
                return Unauthorized("Error 404");
            }

            var roles = await _userManager.GetRolesAsync(user);


            return new UserDto
            {
                Email = user.Email,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user,roles),
                Name = user.Name,
                NickName = user.NickName,
                Image = user.Image,
                Admin = roles.Contains("ADMIN") ? true : false
            };

        }


        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var user = new User
            {
                Email = registerDto.Email,
                UserName = registerDto.Username,
                Name = registerDto.Name,
                NickName = registerDto.NickName
            };
            var result = await _userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded)
            {
                return BadRequest("error 400");
            }

            return new UserDto
            {
                Name = user.Name,
                NickName = user.NickName,
                Token = _tokenService.CreateToken(user, null),
                Email = user.Email,
                UserName = user.UserName,
                Admin = false
            };
        }


        [Authorize]
        [HttpPut("update/{id}")]
        public async Task<ActionResult<UserDto>> Update(string id, RegisterDto registerDto)
        {

            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound("The user doesn't exist");
            }

            user.Name = registerDto.Name;
            user.NickName = registerDto.NickName;
            user.Image = registerDto.Image;

            if(!string.IsNullOrEmpty(registerDto.Password))
            {
                user.PasswordHash = _passwordHasher.HashPassword(user, registerDto.Password);


            }


           

            var result = await _userManager.UpdateAsync(user);

            if (!result.Succeeded)
            {
                return BadRequest("400 Could not update the user");
            }

            var roles = await _userManager.GetRolesAsync(user);



            {
                return new UserDto
                {
                    Name = user.Name,
                    NickName = user.NickName,
                    Email = user.Email,
                    UserName = user.UserName,
                    Token = _tokenService.CreateToken(user, roles),
                    Image = user.Image,
                    Admin = roles.Contains("ADMIN") ? true : false

                };
            }


        }

        [Authorize(Roles = "ADMIN")]
        [HttpGet("pagination")]
        public async Task<ActionResult<Pagination<UserDto>>> GetUser([FromQuery] UserSpecificationParams userParams)
        {
            var spec = new UserSpecification(userParams);
            var user = await _securityRepository.GetAllWithSpec(spec);

            var specCount = new UserForCountingSpecification(userParams);
            var totalUser = await _securityRepository.CountAsync(specCount);

            var rounded = Math.Ceiling(Convert.ToDecimal(totalUser / userParams.PageSize));
            var totalPages = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<User>, IReadOnlyList<UserDto>>(user);

            return Ok(
                 new Pagination<UserDto>
                 {
                     Count = totalUser,
                     Data = data,
                     PageCount = totalPages,
                     PageIndex = userParams.PageIndex,
                     PageSize = userParams.PageSize
                 }
                );
        }

        [Authorize(Roles = "ADMIN")]
        [HttpPut("role/{id}")]
        public async Task<ActionResult<UserDto>> UpdateRole(string id, RoleDto roleParam)
        {
            var role = await _roleManager.FindByNameAsync(roleParam.Name);
            if (role == null)
            {
                return NotFound("Erro role undefined");
            }

            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound("The user doesn't exist ");
            }

            var userDto = _mapper.Map<User, UserDto>(user);

            if (roleParam.Status)
            {
                var result = await _userManager.AddToRoleAsync(user, roleParam.Name);
                if (result.Succeeded)
                {
                    userDto.Admin = true;
                }

                if (result.Errors.Any())
                {
                    if (result.Errors.Where(x => x.Code == "UserAlradyRole").Any())
                    {
                        userDto.Admin = true;
                    }
                }


            }
            else
            {

                var result = await _userManager.RemoveFromRoleAsync(user, roleParam.Name);
                if (result.Succeeded)
                {
                    userDto.Admin = false;
                }

            }

           

            if(userDto.Admin)
            {
                var roles = new List<string>();
                roles.Add("ADMIN");
                userDto.Token = _tokenService.CreateToken(user, roles);
            } else
            {
              userDto.Token = _tokenService.CreateToken(user, null);
            }

           

            return userDto;


        }


        [Authorize(Roles = "ADMIN")]
        [HttpGet("account/{id}")]
        public async Task<ActionResult<UserDto>> GetUserBy(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound("404 The user doesn't exist");

            }

            var roles = await _userManager.GetRolesAsync(user);
            return new UserDto
            {
                Name = user.Name,
                NickName = user.NickName,
                Email = user.Email,
                UserName = user.UserName,
                Image = user.Image,
                Admin = roles.Contains("ADMIN") ? true : false
            };

        }



        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetUser()
        {

           var email =  HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            var user = await _userManager.FindByEmailAsync(email);

            var roles = await _userManager.GetRolesAsync(user);


            return new UserDto
            {
                
                Name = user.Name,
                NickName = user.NickName,
                Email = user.Email,
                UserName = user.UserName,
                Image = user.Image,
                Token = _tokenService.CreateToken(user, roles),
                Admin = roles.Contains("ADMIN") ? true : false
            };
        }


        [HttpGet("emailvalid")]
        public async Task<ActionResult<bool>> ValidarEmail([FromQuery] string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null) return false;

            return true;
        }


        [Authorize]
        [HttpGet("direction")]
        public async Task<ActionResult<DirectionDto>> GetDirection()
        {

            var user = await _userManager.SearchUserWithDirectionAsync(HttpContext.User);


            return _mapper.Map<Direction, DirectionDto>(user.Direction);

        }

        [Authorize]
        [HttpPut("direction")]
        public async Task<ActionResult<DirectionDto>> UpdateDirection(DirectionDto direction)
        {
            var user = await _userManager.SearchUserWithDirectionAsync(HttpContext.User);

            user.Direction = _mapper.Map<DirectionDto, Direction>(direction);
            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded) return Ok(_mapper.Map<Direction, DirectionDto>(user.Direction));

            return BadRequest("Dont was possible update in user");
        }

    }
}
