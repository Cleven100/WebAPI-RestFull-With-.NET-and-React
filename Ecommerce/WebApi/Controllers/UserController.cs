﻿using AutoMapper;
using Core.Entities;
using Core.Interfaces;
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

        
        public UserController(UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenService, IMapper mapper)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _tokenService = tokenService;
            _mapper = mapper;

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

            return new UserDto
            {
                Email = user.Email,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user),
                Name = user.Name,
                NickName = user.NickName
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
                Token = _tokenService.CreateToken(user),
                Email = user.Email,
                UserName = user.UserName
            };
        }


        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetUser()
        {

           var email =  HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
           var user = await _userManager.FindByEmailAsync(email);


            return new UserDto
            {
                
                Name = user.Name,
                NickName = user.NickName,
                Email = user.Email,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user),
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
