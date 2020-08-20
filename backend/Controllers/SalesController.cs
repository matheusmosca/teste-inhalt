using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using backend.Models;

namespace backend.Controllers
{
  [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        [Authorize]
        public async Task<ActionResult<List<Sale>>> Get([FromServices] DataContext context)
        {
            var sales = await context.Sales.Include(x => x.Product).ToListAsync();
            return sales;
        }

        [HttpPost]
        [Route("{id:int}")]
        [Authorize]
        public async Task<ActionResult<Sale>> Post([FromServices] DataContext context, [FromBody] Sale sale, int id)
        {
            if(!ModelState.IsValid) 
            {
                return BadRequest(ModelState);            
            }

            var product = await context.Products
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id);

            if (product != null) 
            {
                // Verifica se há produtos suficientes para realizar a venda
                if (product.Amount >= sale.Amount) 
                {
                    // Atualiza o estoque e o numero de vendas do produto
                    product.Amount = product.Amount - sale.Amount;
                    product.SalesCount++;
                    context.Products.Update(product);
                    await context.SaveChangesAsync();

                    // Estabelece os atributos da venda
                    sale.Value = sale.Amount * product.Price;
                    sale.Product = product;
                    sale.ProductId = id;
                    await context.Sales.AddAsync(sale);
                    await context.SaveChangesAsync();
                    return sale;
                } 
                else
                {
                    return BadRequest(new { error = "Não há produtos em estoque suficiente" });
                }
            }
            else 
            {
                return NotFound(new { error = "Produto não encontrado" });
            }
        }

        // Retorna o total arrecadado em vendas
        [HttpGet]
        [Route("Income")]
        [Authorize]
        public async Task<ActionResult<decimal>> GetTotalIncome([FromServices] DataContext context)
        {
            var sales = await context.Sales.ToListAsync();
            decimal income = 0;
            sales.ForEach(x => income = income + x.Value);
            return income;
        }
    }


}