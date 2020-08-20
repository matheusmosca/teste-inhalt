using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserApi.Models;
using Microsoft.AspNetCore.Authorization;
using backend.Services;

namespace backend.Controllers
{
    [Route("api")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        [Route("Login")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody]User model, [FromServices] UserContext context)
        {
            var user = await context.UserItems
            .FirstOrDefaultAsync(x => x.Username == model.Username && x.Password == model.Password);

            if (user == null)
                return NotFound(new { message = "Usuário ou senha inválidos" });

            var token = TokenService.GenerateToken(user);

            user.Password = "";
            
            return new
            {
                user = user,
                token = token
            };
        }
    }
}
